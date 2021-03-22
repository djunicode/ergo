const { existsSync } = require("fs");
const { assert , expect } = require("chai");
const createProject = require("../app/electron/createProject");

let location = "C:\\Users\\win\\AppData\\Roaming\\ergo"

describe("Create a folder of the Project", () => {
  it("Should create appropriate files and folder for a Node Project", async() => {
    let nameOfProject = "hello1";
    let returnValue;
    returnValue = await createProject(nameOfProject , location , "node")
    // .then(function(){
      setTimeout(function(){ 
        expect(existsSync(`C:\\Users\\win\\AppData\\Roaming\\ergo\\Projects\\${nameOfProject}`)).to.equal(true);
        // expect
      }, 7000);  
    // })
  });
  it("Should create appropriate files and folder for a Django Project", async() => {
    let nameOfProject = "mysite1";

    returnValue = await createProject(nameOfProject , location , "django")
    // .then(function(){
      setTimeout(function(){ 
        expect(existsSync(`C:\\Users\\win\\AppData\\Roaming\\ergo\\Projects\\${nameOfProject}`)).to.equal(true);
      }, 7000);  
    // })
  });
});