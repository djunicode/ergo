const { expect } = require("chai");
const createProject = require("../app/electron/createProject");

let location = "C:\\Users\\Accounts\\AppData\\Roaming\\ergo"

describe("Create a folder of the Project", () => {
  it("Should create appropriate files and folder for a Node Project", async() => {
    let project1 = {
      name : "hello",
      type : "node"
    }
    try {
      let result = await createProject(project1 , location)
      expect(result).to.have.property("success");
      expect(result.success).to.equal(true);
    } catch (error) {
      expect(error).to.be.a('string');
      expect(error).to.include('exists');      
    }
  });

  it("Should create appropriate files and folder for a Django Project", async() => {
    let project2 = {
      name : "mysite",
      type : "django"
    }
    try {
      let result = await createProject(project2 , location)
      expect(result).to.have.property("success");
      expect(result.success).to.equal(true);
    } catch (error) {
      expect(error).to.be.a('string');
      expect(error).to.include('exists');
    }
  });
});