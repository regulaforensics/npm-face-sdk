require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))
source = File.join(__dir__, 'ios')

Pod::Spec.new do |s|
  s.name         = 'RNFaceSDK'
  s.version      = '6.5.28-beta'
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'

  s.source       = { http: "file:#{source}" }
  s.ios.deployment_target = '11.0'
  s.source_files = 'ios/**/*.{h,m}'
  s.exclude_files = [ 'ios/CVDFaceSDK.h', 'ios/CVDFaceSDK.m' ]
  s.dependency 'FaceSDK', '6.4.2318'
  s.dependency 'React'
end
