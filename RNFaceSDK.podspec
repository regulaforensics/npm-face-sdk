require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))
source = File.join(__dir__, 'ios')

Pod::Spec.new do |s|
  s.name         = 'RNFaceSDK'
  s.version      = '7.1.464-rc'
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'

  s.source       = { http: "file:#{source}" }
  s.ios.deployment_target = '14.0'
  s.source_files = 'ios/**/*.{h,m}'
  s.exclude_files = [ 'ios/CVDFaceSDK.h', 'ios/CVDFaceSDK.m' ]
  s.dependency 'FaceSDKStage', '7.2.3097'
  s.dependency 'React'
end
