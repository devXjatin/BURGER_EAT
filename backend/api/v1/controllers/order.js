import { catchAsyncError } from '../middlewares/errorMiddleware.js'
import {Order} from '../models/order.js'

//order created logic
export const orderCreated = catchAsyncError(async(req, res, next) => {
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