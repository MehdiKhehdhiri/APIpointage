import { Router } from "express";
import * as checkInCtrl from "../controllers/checkin/checkin.js"
import * as checkoutCtrl from "../controllers/checkin/checkout.js"

const routes = new Router();

routes.post('/checkin', checkInCtrl.checkIn);
routes.post('/checkout', checkoutCtrl.checkOut);

export default routes;