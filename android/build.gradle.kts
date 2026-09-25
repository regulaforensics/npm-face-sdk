import com.android.build.api.dsl.LibraryExtension

plugins {
    id("com.android.library")
}

// AGP 9+ may already provide built-in Kotlin.
if (extensions.findByName("kotlin") == null) {
    apply(plugin = "kotlin-android")
}

extensions.configure<LibraryExtension> {
    namespace = "com.regula.plugin.face.sdk"
    compileSdk = 36

    defaultConfig {
        minSdk = 24
    }
}

rootProject.allprojects {
    repositories {
        maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader") }
        maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Beta") }
        maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Nightly") }
        maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Stage") }
    }
}

dependencies {
    //noinspection GradleDynamicVersion
    implementation("com.facebook.react:react-native:+")
    //noinspection GradleDependency
    implementation("com.regula.face:api:8.4.5408") {
        isTransitive = true
    }
}
