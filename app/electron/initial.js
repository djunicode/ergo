// To check inbuilt programs are installed or not
// Include shelljs to run shell commands in node
const sh = require('shelljs')

// Include electron-store to store the information in default path of config.json file is :
// C:\Users\[USER_NAME]\AppData\Roaming\[APP_NAME]
const electronStore = require('electron-store');

const newElectronStore = new electronStore();

module.exports = function () {
    // Checking for the Operating System
    if(process.platform == 'darwin'){
        newElectronStore.set('platform.Mac',true)
        newElectronStore.set('platform.Windows',false)
        newElectronStore.set('platform.Linux',false)
    }else if(process.platform == 'linux' ){
        newElectronStore.set('platform.Windows',false)
        newElectronStore.set('platform.Mac',false)
        newElectronStore.set('platform.Linux',true)
    }else{
        newElectronStore.set('platform.Linux',false)
        newElectronStore.set('platform.Mac',false)
        newElectronStore.set('platform.Windows',true)
    }

    let commands = [
      {
        key:'java',
        value:'java  -version'
      },
      {
        key:'node',
        value:'node -v'
      },
      {
        key:'python',
        value:'py --version'
      },
      {
        key:'conda',
        value:'conda -V'
      },
      {
        key:'c',
        value:'gcc --version'
      },
      {
        key:'php',
        value:'php -v'
      },
      {
        key:'npm',
        value:'npm -v'
      },
      {
        key:'jupyter-notebook',
        value:'jupyter-notebook --version'
      },
    ]

    commands.forEach( command => {
      sh.exec(command.value, {silent : true } , (code, output,error) => {

        if(code !== 0) 
        {
          newElectronStore.set(`languages.${command.key}`,false)
        }
        else if(code === 0 ) {
          newElectronStore.set(`languages.${command.key}`,true)
        }
      })
    });

      // sh.exec(commands[0].value, {silent : true } , (code, output,error) => {

      //   if(code !== 0) 
      //   {
      //     newElectronStore.set(`languages.${commands[0].key}`,false)
      //   }
      //   else if(code === 0 ) {
      //     newElectronStore.set(`languages.${commands[0].key}`,true)
      //   }
      // })

    // // Command to check java 
    // sh.exec('java  -version', {silent : true } , (code, output,error) => {

    //     if(code !== 0) 
    //     {
    //         newElectronStore.set('languages.java',false)
    //     }
    //     else if(code === 0 ) {
    //         newElectronStore.set('languages.java',true)
    //     }
    // })
    
    // // Command to check Node 
    // sh.exec('node -v', {silent : true } , (code, output,error) => {

    //     if(code !== 0) 
    //     {
    //         newElectronStore.set('languages.node',false)
    //     }
    //     else if(code === 0 ) {
    //         newElectronStore.set('languages.node',true)
    //     }
    // })

    // // Command to check Python 
    // sh.exec('py --version', {silent : true } , (code, output,error) => {

    //     if(code !== 0) 
    //     {
    //         newElectronStore.set('languages.python',false)
    //     }
    //     else if(code === 0 ) {
    //         newElectronStore.set('languages.python',true)
    //     }
    // })

    // // Command to check Conda 
    // sh.exec('conda -V', {silent : true } , (code, output,error) => {

    //     if(code !== 0) 
    //     {
    //         newElectronStore.set('languages.conda',false)
    //     }
    //     else if(code === 0 ) {
    //         newElectronStore.set('languages.conda',true)
    //     }
    // })

    // // Command to check for a GCC Compiler used for C language 
    // sh.exec('gcc --version', {silent : true } , (code, output,error) => {

    //     if(code !== 0) 
    //     {
    //         newElectronStore.set('languages.c',false)
    //     }
    //     else if(code === 0 ) {
    //         newElectronStore.set('languages.c',true)
    //     }
    // })

    // // Command to check PHP 
    // sh.exec('php -v', {silent : true } , (code, output,error) => {

    //     if(code !== 0) 
    //     {
    //         newElectronStore.set('languages.php',false)
    //     }
    //     else if(code === 0 ) {
    //         newElectronStore.set('languages.php',true)
    //     }
    // })

    // // Command to check NPM 
    // sh.exec('npm -v', {silent : true } , (code, output,error) => {

    //     if(code !== 0) 
    //     {
    //         newElectronStore.set('languages.npm',false)
    //     }
    //     else if(code === 0 ) {
    //         newElectronStore.set('languages.npm',true)
    //     }
    // })

    // // Command to check Jupyter-Notebook 
    // sh.exec('jupyter-notebook --version', {silent : true } , (code, output,error) => {

    //     if(code !== 0) 
    //     {
    //         newElectronStore.set('languages.jupyter-notebook',false)
    //     }
    //     else if(code === 0 ) {
    //         newElectronStore.set('languages.jupyter-notebook',true)
    //     }
    // })
}