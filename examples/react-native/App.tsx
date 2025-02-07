import React, { useEffect, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import * as RNFS from 'react-native-fs'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Button, Platform, Alert } from 'react-native'
import { FaceSDK, MatchFacesRequest, MatchFacesImage, InitConfig, LivenessSkipStep, ImageType, LivenessStatus, LivenessConfig } from '@regulaforensics/face-sdk'

async function init() {
  if (!await initialize()) return
  setStatus("Ready")
}

async function startLiveness() {
  var response = await faceSdk.startLiveness({
    config: new LivenessConfig({
      skipStep: [LivenessSkipStep.ONBOARDING_STEP]
    }),
    notificationCompletion: (notification) => {
      console.log("LivenessStatus: " + notification.status)
    }
  })
  if (response.image == null) return
  setImage(response.image, ImageType.LIVE, 1)
  setLivenessStatus(response.liveness == LivenessStatus.PASSED ? "passed" : "unknown")
}

async function matchFaces() {
  if (image1 == null || image2 == null) {
    setStatus("Both images required!")
    return
  }
  setStatus("Processing...")
  var request = new MatchFacesRequest([image1, image2])
  var response = await faceSdk.matchFaces(request)
  var split = await faceSdk.splitComparedFaces(response.results, 0.75)
  var match = split.matchedFaces
  setSimilarityStatus("failed")
  if (match.length > 0)
    setSimilarityStatus((match[0].similarity * 100).toFixed(2) + "%")
  setStatus("Ready")
}

function clearResults() {
  setStatus("Ready")
  setSimilarityStatus("null")
  setLivenessStatus("null")
  resetImages()
  image1 = null
  image2 = null
}

// If 'regula.license' exists, init using license(enables offline match)
// otherwise init without license.
async function initialize() {
  setStatus("Initializing...")
  var license = await loadAssetIfExists("regula.license")
  var config: InitConfig | undefined
  if (license != null) config = new InitConfig(license)
  var [success, error] = await faceSdk.initialize({ config: config })
  if (!success && error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
  return success
}

function setImage(base64: string, type: number, position: number) {
  setSimilarityStatus("null")
  var mfImage = new MatchFacesImage(base64, type)
  if (position == 1) {
    image1 = mfImage
    setUiImage1("data:image/png;base64," + base64)
    setLivenessStatus("null")
  }
  if (position == 2) {
    image2 = mfImage
    setUiImage2("data:image/png;base64," + base64)
  }
}

async function useCamera(position: number) {
  var response = await faceSdk.startFaceCapture()
  if (response.image == null) return
  var image = response.image
  setImage(image.image, image.imageType, position)
}

function useGallery(position: number) {
  launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 1,
    includeBase64: true
  }, (response: any) => {
    if (response.assets == null) return
    setImage(response.assets[0].base64!, ImageType.PRINTED, position)
  })
}

function pickImage(position: number) {
  Alert.alert("Select option", "", [
    { text: "Use gallery", onPress: () => useGallery(position) },
    { text: "Use camera", onPress: () => useCamera(position) }
  ], { cancelable: true })
}

async function loadAssetIfExists(path: string): Promise<string | null> {
  if (Platform.OS === 'ios') path = RNFS.MainBundlePath + "/license/" + path
  var readFile = Platform.OS === 'ios' ? RNFS.readFile : RNFS.readFileAssets
  try {
    return await readFile(path, 'base64')
  } catch {
    return null
  }
}

var faceSdk = FaceSDK.instance

var image1: MatchFacesImage | null
var image2: MatchFacesImage | null

var status: string, similarityStatus: string, livenessStatus: string

var setStatus: (val: string) => void
var setSimilarityStatus: (val: string) => void
var setLivenessStatus: (val: string) => void
var setUiImage1: (val: string) => void
var setUiImage2: (val: string) => void
var resetImages = () => {
  setUiImage1(require('./images/portrait.png'))
  setUiImage2(require('./images/portrait.png'))
}

const App: () => React.JSX.Element = () => {
  const imageSetter = (originalSetter: (value: any) => void) => (val: any) => {
    if (typeof (val) == 'string') originalSetter({ uri: val })
    else originalSetter(val)
  }
  [status, setStatus] = useState<string>("");
  [similarityStatus, setSimilarityStatus] = useState<string>("null");
  [livenessStatus, setLivenessStatus] = useState<string>("null");
  const [uiImage1, setUiImage1Original] = useState<any>(require('./images/portrait.png'));
  const [uiImage2, setUiImage2Original] = useState<any>(require('./images/portrait.png'));
  setUiImage1 = imageSetter(setUiImage1Original)
  setUiImage2 = imageSetter(setUiImage2Original)

  useEffect(() => {
    init()
    return () => {
      faceSdk.deinitialize()
      clearResults()
    }
  }, [])

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>{status}</Text>

      <View style={styles.container}>
        <MyImage image={uiImage1} onPress={() => pickImage(1)} />
        <MyImage image={uiImage2} onPress={() => pickImage(2)} />

        <View style={{ padding: 10 }} />
        <MyButton text="Match" onPress={() => { matchFaces() }} />
        <MyButton text="Liveness" onPress={() => { startLiveness() }} />
        <MyButton text="Clear" onPress={() => { clearResults() }} />

        <View style={{ flexDirection: 'row', padding: 20 }}>
          <Text style={{ padding: 10 }}>Similarity: {similarityStatus}</Text>
          <Text style={{ padding: 10 }}>Liveness: {livenessStatus}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default App

function MyImage({ image, onPress }: any): React.JSX.Element {
  return <TouchableOpacity onPress={onPress}>
    <Image source={image} resizeMode="contain" style={{ height: 150, width: 200, padding: 5 }} />
  </TouchableOpacity>
}

function MyButton({ text, onPress }: any): React.JSX.Element {
  return <View style={{ padding: 5 }}>
    <Button title={text} color="#4285F4" onPress={onPress} />
  </View>
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    paddingTop: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom: 50
  },
})
