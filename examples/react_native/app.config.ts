import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'face-sdk',
  name: 'Face',
  orientation: 'portrait',
  icon: 'images/icon.png',
  ios: {
    bundleIdentifier: 'com.regula.example.face.react',
    infoPlist: {
      NSCameraUsageDescription: 'To use camera',
      NSPhotoLibraryUsageDescription: 'To use gallery'
    },
    appleTeamId: ''
  },
  android: {
    package: 'com.regula.example.face.react',
  },
  plugins: [
    '@regulaforensics/face-sdk',
    './scripts/withoutMetroServer',
    ['expo-custom-assets', { assetsPaths: ['./assets'] }],
    ['expo-build-properties', {
      ios: { networkInspector: false },
      android: {
        networkInspector: false,
        extraMavenRepos: [
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Beta' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Nightly' },
          { url: 'https://maven.regulaforensics.com/RegulaDocumentReader/Stage' }
        ]
      }
    }]
  ]
})
