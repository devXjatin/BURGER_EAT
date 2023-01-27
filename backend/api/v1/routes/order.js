import express  from "express";
import passport from "passport";
import { isAuthenticated } from "../middlewares/auth.js";
import { getMyOrders, getOrderDetails, orderCreated } from "../controllers/order.js";
const router = express.Router();


//order created
router.post("/create-order", orderCreated)

//my orders route
router.get("/myorders", isAuthenticated, getMyOrders)

//get order details of particular order
router.get("/order/:id", isAuthenticated, getOrderDetails)

export default router