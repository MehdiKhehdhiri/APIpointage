import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';
import request from 'supertest';
import express from 'express';



const app = express();

chai.should();
chai.use(chaiHttp);


describe('Fetch all employees', () => {

  // fetching all employee , if greater than 0 test will sucess
  it('OK, getting employees has more than 1 employee', (done) => {

    request(server).get('/api/employee/list')
      .then((res) => {
        const body = JSON.parse(res.text);
        let actual = body.list;
        expect(actual.length).to.greaterThan(0);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });



  // test for creating a new employee
  it('OK, Creating new Emplpoyee', (done) => {

    request(server).post('/api/employee/create')
      .send({
        name: "Abdur Rahim",
        firstName: "Abdur Rahim",
        dateCreated: "2022-09-19",
        department: "CSE"
      })
      .then((res) => {
        const body = res.body;
        
        expect(body.success).to.equal(true);
        done();
      })
      .catch((err) => {
        //console.log('error --------------------:'+err)
        done(err);
      });
  });


});
