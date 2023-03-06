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
                         docker.build("${params.User_Name}/${params.Image_Name}:${params.Image_Tag}")
                          echo "docker image successfully built."

                        }
                }
        }
        
        stage("Login and Push to DockerHub") {
                steps{
                    echo 'Login to DockerHub and Pushing app docker image to DockerHub..'
                   
                     script {
                          
                          def localImage = "${params.Image_Name}:${params.Image_Tag}"
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
    
         stage("Deployment") {
                steps{
            
                    echo 'Accessing Namespace...'
                    sh 'minikube kubectl -- config set-context --current --namespace=wellness-front'
                    echo 'Applying deployment.yaml'
                    sh 'minikube kubectl -- apply --filename k8s/deployment.yaml'
                    echo 'Applying load-balancer.yaml'
                    sh 'minikube kubectl -- apply --filename k8s/load-balancer.yaml'
                    echo'Display of CLUSTER_IP and PORTS'
                    sh 'minikube kubectl -- get svc'
                    echo 'Retrieving Deployed App IP Address:'
                    sh 'minikube ip'
                    echo 'You may access your application through browser with the following URL format: http://your_minikube_ip:nodePort'


                }
        }
       
    }
}
