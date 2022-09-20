import {Router} from "express";
import employeeRoutes from "./employee.routes.js"
import checkinRoutes from "./checkin.routes.js"

const routes = new Router();

routes.use('/employee', employeeRoutes);
routes.use('/pointage', checkinRoutes);

export default routes;