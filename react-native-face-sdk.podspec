Pod::Spec.new do |s|
  s.name         = 'react-native-face-sdk'
  s.version      = '8.4.1406-nightly'
  s.summary      = 'Regula React Native plugin.'
  s.license      = 'commercial'
  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'
  s.source       = { :path => '.' }
  s.ios.deployment_target = '15.0'
  s.source_files = [ 'ios/*.swift', 'ios/RN*.m' ]
  s.exclude_files = [ 'ios/CDVFaceSDK.swift' ]
  s.dependency 'FaceSDKNightly', '8.4.4995'
  s.dependency 'React'
end
