require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))
source = File.join(__dir__, 'ios')

Pod::Spec.new do |s|
  s.name         = 'RNFaceSDK'
  s.version      = 'module_version_place_holder'
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'

  s.source       = { http: "file:#{source}" }
  s.ios.deployment_target = '13.0'
  s.source_files = [ 'ios/**/*.swift', 'ios/**/RN*.m' ]
  s.exclude_files = [ 'ios/CDVFaceSDK.swift' ]
  s.dependency 'pod_place_holder', 'version_place_holder'
  s.dependency 'React'
end
