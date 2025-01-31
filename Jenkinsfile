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
          yes | ${ANDROID_HOME}/cmdline-tools/latest/bin/sdkmanager --licenses
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
 
 