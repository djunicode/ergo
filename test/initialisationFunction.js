// To RUN tests : npm run test
//  TO RUN this file particularly : npm run test test/initialisationFunction.js

//Require the dev-dependencies for Testing
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

// Include shelljs to run shell commands in node
const sh = require('shelljs')

// Include electron-store to store the information in default path :
// FOR TESTING , the path of config.json file is : C:\Users\win\AppData\Roaming\electron-store-nodejs\Config[APP_NAME]
const Store = require('electron-store');
const store=new Store();

chai.use(chaiHttp);
 
describe('Check for Languages', () => {

	describe('Checking for Java', () => {
	    it('it should check if Java is installed in the system and update the config.json file', (done) => {

            try {
                sh.exec('java  -version',{silent:true}, (code) => {

                    if(code !== 0) 
                    {
                        store.set('languages.java',false)
                    }
                    else if(code === 0 ) {
                        store.set('languages.java',true)
                    }
                })
            }catch (error) {
                throw error;
            }
            done();
        }); 
	});

    describe('Checking for Conda', () => {
	    it('it should check if Conda is installed in the system and update the config.json file', (done) => {
            try {
                sh.exec('conda  -V',{silent:true}, (code) => {

                    if(code !== 0) 
                    {
                        store.set('languages.conda',false)
                    }
                    else if(code === 0 ) {
                        store.set('languages.conda',true)
                    }
                })
            }catch (error) {
                throw error;
            }
            done();
        }); 
	});

    describe('Checking for Node', () => {
	    it('it should check if Node is installed in the system and update the config.json file', (done) => {

            try {
                sh.exec('node -v',{silent:true}, (code) => {
                    if(code !== 0) 
                    {
                        store.set('languages.node',false)
                    }
                    else if(code === 0 ) {
                        store.set('languages.node',true)
                    }
                })
            } catch (error) {
                throw error;
            }
            done();
        }); 
	});

    describe('Checking for NPM', () => {
	    it('it should check if NPM is installed in the system and update the config.json file', (done) => {

            try {
                sh.exec('npm -v',{silent:true}, (code) => {
                    if(code !== 0) 
                    {
                        store.set('languages.npm',false)
                    }
                    else if(code === 0 ) {
                        store.set('languages.npm',true)
                    }
                })
            } catch (error) {
                throw error;
            }
            done();
        }); 
	});

    describe('Checking for Python', () => {
	    it('it should check if Python is installed in the system and update the config.json file', (done) => {

            try {
                sh.exec('py --version',{silent:true}, (code) => {
                    if(code !== 0) 
                    {
                        store.set('languages.python',false)
                    }
                    else if(code === 0 ) {
                        store.set('languages.python',true)
                    }
                })
            } catch (error) {
                throw error;
            }
            done();
        }); 
	});

    describe('Checking for C', () => {
	    it('it should check if C is installed in the system and update the config.json file', (done) => {

            try {
                sh.exec('gcc --version',{silent:true}, (code) => {
                    if(code !== 0) 
                    {
                        store.set('languages.c',false)
                    }
                    else if(code === 0 ) {
                        store.set('languages.c',true)
                    }
                })
            } catch (error) {
                throw error;
            }
            done();
        }); 
	});

    describe('Checking for PHP', () => {
	    it('it should check if PHP is installed in the system and update the config.json file', (done) => {

            try {
                sh.exec('php -v',{silent:true}, (code) => {
                    if(code !== 0) 
                    {
                        store.set('languages.php',false)
                    }
                    else if(code === 0 ) {
                        store.set('languages.php',true)
                    }
                })
            } catch (error) {
                throw error;
            }
            done();
        }); 
	});

    describe('Checking for Jupyter-Notebook', () => {
	    it('it should check if Jupyter-Notebook is installed in the system and update the config.json file', (done) => {

            try {
                sh.exec('jupyter-notebook --version',{silent:true}, (code) => {
                    if(code !== 0) 
                    {
                        store.set('languages.jupyter-notebook',false)
                    }
                    else if(code === 0 ) {
                        store.set('languages.jupyter-notebook',true)
                    }
                })
            } catch (error) {
                throw error;
            }
            done();
        }); 
	});
   
});

describe('Check for Operating System', () => {
    
    
    it('it should check which Operating System is being used and update the config.json file', (done) => {

        try {
            if(process.platform == 'darwin'){
                store.set('platform.Mac',true)
                store.set('platform.Windows',false)
                store.set('platform.Linux',false)
            }else if(process.platform == 'linux' ){
                store.set('platform.Windows',false)
                store.set('platform.Mac',false)
                store.set('platform.Linux',true)
            }else{
                store.set('platform.Linux',false)
                store.set('platform.Mac',false)
                store.set('platform.Windows',true)
            }
        } catch (error) {
            throw error;
        }
        done();
    }); 
	
});