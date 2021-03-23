const { expect } = require("chai");
const createProject = require("../app/electron/createProject");

let location = "C:\\Users\\win\\AppData\\Roaming\\ergo"

describe("Create a folder of the Project", () => {
  it("Should create appropriate files and folder for a Node Project", (done) => {
    let project1 = {
      name : "hello",
      type : "node"
    }
    createProject(project1 , location)
    .then(data => {
      expect(data).to.have.property("success");
      expect(data.success).to.equal(true);
      done();
    }).catch(err => {
      expect(err).to.be.a('string');
      expect(err).to.include('exists');
      done();
    })
  });

  it("Should create appropriate files and folder for a Django Project", (done) => {
    let project2 = {
      name : "mysite",
      type : "django"
    }
    createProject(project2 , location)
    .then(data => {
      expect(data).to.have.property("success");
      expect(data.success).to.equal(true);
      done();
    }).catch(err => {
      expect(err).to.be.a('string');
      expect(err).to.include('exists');

      done();
    })
  });
});