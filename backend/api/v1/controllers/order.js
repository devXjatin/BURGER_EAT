import ErrorHandler from '../../../utils/ErrorHandler.js';
import { asyncError } from '../middlewares/errorMiddleware.js'
import {Order} from '../models/order.js'

//order created logic
export const orderCreated = asyncError(async(req, res, next) => {
    const {
      shippingInfo,
      orderItems,
      paymentMethod,
      itemPrice,
      shippingCharges,
      taxCharges,
      totalAmount,
    } = req.body;
  
    const user = "req.user._id"
  
    const orderOptions={
      shippingInfo,
      orderItems,
      paymentMethod,
      itemPrice,
      shippingCharges,
      taxCharges,
      totalAmount,
      user
      }
  
      await Order.create(orderOptions)
      res.status(201).json({
          success:true,
          message:"Order Placed Successfully via Cash on Delivery"
      })
  }
  )

//get all orders
export const getMyOrders =asyncError(async(req, res, next)=>{
    const orders = await Order.find({
        user:req.user._id,
    }).populate("user", "name")

    res.status(200).json({
        success:true,
        orders
    })
})

//get order details
export const getOrderDetails = asyncError(async(req, res, next)=>{
    const order = await Order.findById(req.params.id).populate("user", "name")

    if(!order){
        return next(new ErrorHandler("Invalid Order Id", 404))
    }

    res.status(200).json({
        success:true,
        order
    })
})