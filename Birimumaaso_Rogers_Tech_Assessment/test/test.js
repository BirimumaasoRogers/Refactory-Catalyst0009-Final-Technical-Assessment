process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should;
const sinon = require('sinon');
const regModel = require('../models/regModel');
const app = require("../server");
const router = require('../routes/reg-route');



chai.use(chaiHttp);
//Our parent block
describe("Server!", () => {
    it("welcomes user to the api", (done) => {
        chai
            .request(app)
            .get("/registration")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
    describe('Registration', () => {
        beforeEach((done) => { //Before each test we empty the database
            regModel.remove({}, (err) => {
                done();
            });
        });

    })
});
describe('Post some form data', () => {
    it('post', (done) => {
        // Send some Form Data
        chai.request(app)
            .post('/registration')
            .type('form')
            .send({
                '_method': 'post',
                'surname:': 'Birimumaaso',
                'givenname': 'Rogers',
                'title': 'Mr.',
                'gender': 'Male',
                'dob': '07/01/2002',
                'residence': 'Masaka',
                'nationality': 'Ugandan'
            })
            .end(function(req, res) {
                surname.should.be.equal("Birimumaaso");
                done();
            });
    })
});