import {Router} from "express";
import employeeRoutes from "./employee.routes"
import checkinRoutes from "./checkin.routes"

const routes = new Router();

routes.use('/employee', employeeRoutes);
routes.use('/pointage', checkinRoutes);

export default routes;