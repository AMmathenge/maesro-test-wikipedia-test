/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    tools {
        maven 'MVN2'  // Ensure that 'MVN2' is defined in Jenkins Global Tool Configuration
    }
    environment {
        ANDROID_HOME = '/opt/android-sdk'  // Update with the correct Android SDK path
        PATH = "$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH"
    }
    stages {
        stage('Install SDK') {
            steps {
                sh '''
                    yes | sdkmanager --licenses
                    yes | sdkmanager "platform-tools" "build-tools;34.0.0"
                '''
            }
        }
        stage('Maven Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Android Build') {
            steps {
                sh '''
                    chmod +x gradlew
                    ./gradlew assembleDebug
                '''
            }
        }
    }
}
