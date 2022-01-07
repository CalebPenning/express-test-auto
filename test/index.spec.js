const chai = require("chai")
const chaiHttp = require("chai-http")
const expect = chai.expect
const app = require("../index")
chai.use(chaiHttp)

describe("GET /", () => {
    it("should return a 200 status code", (done) => {
        chai.request(app)
            .get("/")
            .end((err, res) => {
                if (err) return done(err)
                expect(res.status).to.equal(200)
                done()
            })
    })
    it("Should return a message saying 'Server us running on port 3001'", (done) => {
        chai.request(app)
            .get("/")
            .end((err, res) => {
                if (err) return done(err)
                expect(res.text).to.equal("Server is running on port 3001")
                done()
            })
    })
})

after(() => {
    process.exit(0)
})