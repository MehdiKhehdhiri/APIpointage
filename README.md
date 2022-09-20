# *API DE POINTAGE*

*an api that manages the checkin/out and creation of new employees* 

### Dependencies
body-parser
chai-http
cors 
express
mockgoose
moment
mongoose
request
supertest
chai 
mocha
nodemon 
### Getting started

Put your mongodb connection uri in line 7 of /src/index.js

## Usage

To checkin:
 Send a post request to /pointage/checkin
 {
    "employee_id": "String",
    "checkIn": "Date",
    "comment":"String"
    }

## Demo

*Grab a simple block of code that makes use of your project/tool and paste it here.*

## Team

* Mehdi Khedhiri