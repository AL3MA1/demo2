pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente1"
                    }
                    steps {
                        git url: 'https://github.com/AL3MA1/demo2.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 928e861c-91b0-4897-97d8-caa0a9a5f1ad --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente2"
                    }
                    steps {
                        git url: 'https://github.com/AL3MA1/demo2.git --parallel'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 928e861c-91b0-4897-97d8-caa0a9a5f1ad'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agente3"
                    }
                    steps {
                        git url: 'https://github.com/AL3MA1/demo2.git --parallel'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 928e861c-91b0-4897-97d8-caa0a9a5f1ad'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agente4"
                    }
                    steps {
                        git url: 'https://github.com/AL3MA1/demo2.git --parallel'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 928e861c-91b0-4897-97d8-caa0a9a5f1ad'
                    
                    }
                }
                stage('Slave 5') {
                    agent {
                        label "Agente5"
                    }
                    steps {
                        git url: 'https://github.com/AL3MA1/demo2.git --parallel'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 928e861c-91b0-4897-97d8-caa0a9a5f1ad'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}