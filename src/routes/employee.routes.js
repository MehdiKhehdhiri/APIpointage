import { Router } from "express";
import * as createEmployeeCtrl from "../controllers/employee/createEmployee.js"
import * as getListEmployeesCtrl from "../controllers/employee/getListEmployees.js"

const routes = new Router();

routes.post('/create', createEmployeeCtrl.createEmployee);
routes.get('/list', getListEmployeesCtrl.getListEmployees);

export default routes;