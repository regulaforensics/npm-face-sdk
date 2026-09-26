extensions.getByName("android").withGroovyBuilder {
    "aaptOptions" { "noCompress"("Regula/faceSdkResource.dat") }
}

repositories {
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader") }
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Beta") }
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Nightly") }
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Stage") }
}

dependencies {
    //noinspection GradleDependency
    add("implementation", "com.regula.face:api:8.3.5412") {
        isTransitive = true
    }
}
