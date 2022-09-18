import { Router } from "express";
import * as checkInCtrl from "../controllers/checkin/checkin"
import * as checkoutCtrl from "../controllers/checkin/checkout"

const routes = new Router();

routes.post('/checkin', checkInCtrl.checkIn);
routes.post('/checkout', checkoutCtrl.checkOut);

export default routes;