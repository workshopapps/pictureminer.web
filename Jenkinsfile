pipeline {
	agent any
	
	tools {nodejs "nodejs"}
	
	stages {

		stage("build frontend"){

			steps {
                sh " rm -rf pictureminer.web"
			    sh "git clone https://github.com/workshopapps/pictureminer.web.git"
                dir('pictureminer.web') {
                   
                    sh "npm install"
                    sh "npm run build"
                    
                }
			} 
	    }
		stage("Deploy frontend"){

			steps {
                sh "sudo su - javi && whoami"
				sh "sudo ls /home/javi/"
				sh "sudo cp -fr ${WORKSPACE}/pictureminer.web/build/* /home/javi/frontend_app/build"
				sh "sudo systemctl restart discripto.service"
			} 
	    }

        stage("Performance test"){

			steps{
				echo 'Installing k6'
                // sh 'sudo chmod +x setup_k6.sh'
                // sh 'sudo ./setup_k6.sh'
                echo 'Running K6 performance tests...'
				sh 'ls -a'
				sh "pwd"
                sh 'k6 run Performance_Test_Discriptof.js'
			}
		}

		
    }

    post{
        failure{
            emailext attachLog: true, 
            to: 'sodipomayowa7@gmail.com',
            subject: '${BUILD_TAG} Build failed',
            body: '${BUILD_TAG} Build Failed \nMore Info can be found here: ${BUILD_URL} or in the log file below'
        }
    }
}
