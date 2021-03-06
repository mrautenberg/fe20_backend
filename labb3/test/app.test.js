const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;

chai.use(chaiHttp);

// Testing random number
describe("/api/random should return a random number between 0-1023", () => {
  it("to return a random number between 0-1023 and status to be success", (done) => {
    chai
      .request(app)
      .get("/api/random")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.number).to.be.a("number");
        done();
      });
  });
});

// Testing data type --> counter to be string
describe("/api/counter should be a string", () => {
  it("to return the number in counter and status to be success", (done) => {
    chai
      .request(app)
      .get("/api/counter")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.counter).to.be.a("string");
        done();
      });
  });
});

// Testing data type in add --> parameters in counter should be number
describe("/api/add parameters should be numbers", () => {
  it("the parameters should be numbers", (done) => {
    chai
      .request(app)
      .get("/api/add")
      .end((err, res) => {
        expect(res.body.countBeforeAdd).to.be.a("number");
        expect(res.body.counter).to.be.a("number");
        done();
      });
  });
});

// Testing add functionality --> Do we add one to the counter?
describe("/api/add should add +1 to the counter", () => {
  it("to add one to the number in counter ", (done) => {
    chai
      .request(app)
      .get("/api/add")
      .end((err, res) => {
        expect(res.body.counter).to.equals(res.body.countBeforeAdd + 1);
        done();
      });
  });
});

// Testing data type in subtract --> parameters in counter should be number
describe("/api/subtract parameters should be numbers", () => {
  it("the parameters should be numbers", (done) => {
    chai
      .request(app)
      .get("/api/subtract")
      .end((err, res) => {
        expect(res.body.countBeforeSubtract).to.be.a("number");
        expect(res.body.counter).to.be.a("number");
        done();
      });
  });
});

// Testing add functionality --> Do we subtract one to the counter?
describe("/api/subtract should subtract -1 to the counter", () => {
  it("to subtract one to the number in counter ", (done) => {
    chai
      .request(app)
      .get("/api/subtract")
      .end((err, res) => {
        expect(res.body.counter).to.equals(res.body.countBeforeSubtract - 1);
        done();
      });
  });
});
