/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    environment {
        ANDROID_HOME = '/usr/lib/android-sdk'  // Verify this path matches your installation!
    }
    stages {
        stage('Accept Licenses') {
            steps {
                sh '''
          yes | ${ANDROID_HOME}/cmdline-tools/latest/cmdline-tools/bin/sdkmanager --licenses
        '''
            }
        }
        stage('Install SDK Tools') {
            steps {
                sh '''
          ${ANDROID_HOME}/cmdline-tools/latest/bin/sdkmanager --sdk_root=${ANDROID_HOME} "platform-tools" "platforms;android-34"
        '''
            }
        }
        stage('Build') {
            steps {
                sh './gradlew assembleDebug'
            }
        }
    }
}
 
 The  ANDROID_HOME  environment variable is set to the path where the Android SDK is installed. The  Accept Licenses  stage accepts the licenses for the Android SDK. The  Install SDK Tools  stage installs the platform tools and the Android 12 SDK. The  Build  stage builds the Android app. 
 The  Jenkinsfile  is a declarative pipeline script. The pipeline has three stages:  Accept Licenses ,  Install SDK Tools , and  Build . Each stage has a  steps  block that contains shell commands to execute