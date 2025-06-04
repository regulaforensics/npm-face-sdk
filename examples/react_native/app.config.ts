import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'face-sdk',
  name: 'FaceSDK',
  orientation: 'portrait',
  icon: './images/icon/icon.png',
  ios: {
    bundleIdentifier: 'com.regula.documentreader.qa',
    infoPlist: {
      NSCameraUsageDescription: 'To use camera',
      NSPhotoLibraryUsageDescription: 'To use gallery'
    },
    appleTeamId: ''
  },
  android: {
    package: 'com.regula.documentreader.api.androidtest',
    adaptiveIcon: {
      foregroundImage: './images/icon/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    edgeToEdgeEnabled: true
  },
  plugins: [
    ['expo-custom-assets', { assetsPaths: ['./assets'] }],
    ['expo-build-properties', {
      android: {
        extraMavenRepos: [
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Beta' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Nightly' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Stage' }
        ]
      },
       // This fixes a bug in expo v53. https://github.com/expo/expo/issues/36908
      ios: { networkInspector: false }
    }]
  ]
})
