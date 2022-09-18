import { Router } from "express";
import * as createEmployeeCtrl from "../controllers/employee/createEmployee"
import * as getListEmployeesCtrl from "../controllers/employee/getListEmployees"

const routes = new Router();

routes.post('/create', createEmployeeCtrl.createEmployee);
routes.get('/list', getListEmployeesCtrl.getListEmployees);

export default routes;