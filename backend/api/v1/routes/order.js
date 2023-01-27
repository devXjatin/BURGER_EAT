import express  from "express";
import passport from "passport";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { getAdminOrders, getMyOrders, getOrderDetails, orderCreated, processOrders } from "../controllers/order.js";
const router = express.Router();


//order created
router.post("/create-order", orderCreated)

//my orders route
router.get("/myorders", isAuthenticated, getMyOrders)

//get order details of particular order
router.get("/order/:id", isAuthenticated, getOrderDetails)

//get admin orders and add admin middleware
router.get("/admin/orders", isAuthenticated, authorizeAdmin,getAdminOrders)

//change status of the order route
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin,processOrders)

export default router