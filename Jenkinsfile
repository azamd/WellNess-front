pipeline {
    agent any

     parameters {
      
      string(
            name: "User_Name", 
            defaultValue: 'amdaziz', 
            description: '')
      string(
            name: "Image_Name", 
            defaultValue: 'wellness-front', 
            description: '')
      string(
            name: "Image_Tag", 
            defaultValue: 'latest', 
            description: 'Image tag')
      string(
            name: "DockerfileName", 
            defaultValue: '.', 
            description: '')   
    }

    stages {
       
    stage("App Build") {
      
      steps {
        echo 'building the application...'
        sh "npm run build"
        echo "successful app build."
      }
    }
        stage("Docker Image") {
                steps{
                    echo 'building the application Docker container image..'
                    script {
                          echo "Building docker image"
                         //docker.build "amdaziz/wellness-front:latest" 
                         //Dockerfile wasn't included cause Dockerfile is in the same directory : .
                         docker.build("${params.User_Name}/${params.Image_Name}" + ":$BUILD_NUMBER")
                          echo "docker image successfully built."

                        }
                }
        }
        
        stage("Login and Push to DockerHub") {
                steps{
                    echo 'Login to DockerHub and Pushing app docker image to DockerHub..'
                   
                     script {
                          
                          def localImage = "${params.Image_Name}" + ":$BUILD_NUMBER"
                          def repositoryName = "${params.User_Name}/${localImage}"
                 echo "Login to DockerHub."
                 docker.withRegistry("", "DockerHubCredentials") {
                 echo "Login successful!"
                 def image = docker.image("${repositoryName}");
                 echo "Pushing Image to DockerHub."
                 image.push()
                 echo "Push successful!"
                   }   
            }
            echo "Login and Push to DockerHub successfully completed."
                }
        }
    
         stage("Kube Deployment") {
                steps{

                withCredentials([file(credentialsId: 'mykubeconfig', variable: 'KUBECONFIG')]) 
                {
            sh 'sed -i "s/<TAG>/${BUILD_NUMBER}/" k8s/deployment-and-service.yaml'
            sh 'minikube kubectl -- apply --filename k8s/deployment-and-service.yaml'

                }
        }
       
    }
}
}
