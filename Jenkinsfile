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
		
    }
}