const app = require("../app");
const chai = require("chai");

// chaiHttp used for testing http requests
const chaiHttp = require("chai-http");

const { expect } = chai;

// Use http library for chai
chai.use(chaiHttp);

// Random number
describe("Random Number Between 0-1023", () => {
  it("Returns a random number between 0-1023", (done) => {
    chai
      .request(app)
      .get("/api/random")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        // RANDOM NUM INSTEAD OF MSG!!
        expect(res.body.number).to.equals(55);
        done();
      });
  });
});
