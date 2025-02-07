import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.regula.face.api',
  appName: 'FaceSDK',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
