import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';
import request from 'supertest';
import express, { response } from 'express';


const app = express();

chai.should();
chai.use(chaiHttp);


let employee = null;

describe('Employee Check in/out ', () => {
 


  // when a non existing user checks in send a user not found message
  it('Check in, when a non existing user checks in send a user not found message', (done) => {
    request(server).post('/api/pointage/checkin')
      .send({
        "employee_id": "63283e21f62077e2ad9b2456", // appropriate id need to test
        "checkIn": "2022-09-19",
        "checkOut": null,
        "comment": "cemmentor",
        "duration" : null
    })
      .then((res) => {
        expect(res.error.status).to.equal(404);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });



  // when a non existing user checks out send a user not found message
  it('Check out, when a non existing user checks out send a user not found message', (done) => {
    request(server).post('/api/pointage/checkout')
      .send({
        "employee_id": "63283e21f62077e2ad9b2456", // appropriate id need to test
        "checkIn": "2022-09-19",
        "checkOut": null,
        "comment": "cemmentor",
        "duration" : null
    })
      .then((res) => {
        expect(res.error.status).to.equal(404);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  // when user check out without checking in first send error message
  it("Check out, when user check out without checking in first send error message", (done) => {

    request(server).post('/api/pointage/checkout')
      .send({
        "employee_id": "6328b7636dd66d29952d404c", // appropriate id need to test
        "checkIn": "2022-09-20",
        "checkOut": null,
        "comment": "cemmentor",
        "duration" : null
    })
      .then((res) => {
        expect(res.error.status).to.equal(500);
        expect(res.body.message).to.equal('employee hasnt checked in yet');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  // when user check in multiple time in the same day with checking out send error message
  it("Check in, when user check in multiple time in the same day with checking out send error message", (done) => {

    request(server).post('/api/pointage/checkin')
      .send({
        "employee_id": "6328b72e81b3e48037e06fd0", // appropriate id need to test
        "checkIn": "2022-09-20",
        "checkOut": null,
        "comment": "cemmentor",
        "duration" : null
    })
      .then((res) => {
        //console.log(res.body);
        expect(res.error.status).to.equal(500);
        expect(res.body.message).to.equal('employee hasnt checked out yet');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });


});
