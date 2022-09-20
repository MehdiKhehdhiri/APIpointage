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

To checkout:  
 Send a post request to /pointage/checkout  
 {  
    "employee_id": "String",  
    "checkOut": "Date",  
    "comment":"String"  
 }  

To Create a new employee:  
 Send a post request to /employee/create  
 {  
    "name": "String",  
    "firstName": "String",  
    "dateCreated": "Date",  
    "department":"String"  
}  
PS: the id will be assigned automaticaly to each new employee  

To list employees:  
 Send a get request to /employee/list  
 {  
    "dateCreated": "Date"  
}  
PS: you can send the dateCreated in the json of the request to filter by creation date or send it empty to list all employees  
## Team

* Mehdi Khedhiri