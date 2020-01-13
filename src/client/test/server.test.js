
const app = require("../../index.js");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("Server!", () => {
  it("welcomes to the api", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("Get All the credit card list", done => {
    chai
      .request(app)
      .get("/api/creditcard/list")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });


});