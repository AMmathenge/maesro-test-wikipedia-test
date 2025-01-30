pipeline {
    agent any
    tools {
        maven 'MVN2'
    }
    stages {
        stage('Build') {
            steps {
                // mvn clean package
                sh script: 'mvn clean package'
            }
        }
    }
}
