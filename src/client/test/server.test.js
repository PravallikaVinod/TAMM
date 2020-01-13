

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

  it("Add New Credit card to the JSON file", done => {
    chai
      .request(app)
      .post("/api/creditcard/add")
      .send({"name":"Sita","cardNumber":79927398713,"limit":100000})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("Card saved successfully");
        done();
      });
  });


});
