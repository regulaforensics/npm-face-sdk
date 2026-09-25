// swift-tools-version: 5.9

import PackageDescription

let package = Package(
    name: "@regulaforensics/face-sdk",
    platforms: [.iOS(.v15)],
    products: [.library(name: "@regulaforensics/face-sdk", targets: ["@regulaforensics/face-sdk"])],
    dependencies: [
        .package(url: "https://github.com/apache/cordova-ios.git", branch: "master"),
        .package(
            url: "https://github.com/regulaforensics/FaceSDK-Swift-Package",
            exact: "8.4.4993-rc"
        )
    ],
    targets: [
        .target(
            name: "@regulaforensics/face-sdk",
            dependencies: [
                .product(name: "Cordova", package: "cordova-ios"),
                .product(name: "FaceSDK", package: "FaceSDK-Swift-Package")
            ],
            path: "ios",
            exclude: ["RNFaceSDK.swift", "RNFaceSDK.m"]
        )
    ]
)
