import express from 'express'
import {verifyStripe,placeOrder,updateOrder,allOrders,placeOrderRazorPay,placeOrderStripe,userOrders} from '../controllers/orderController.js'
import auth from '../middleware/auth.js';
import adminAuth from '../middleware/adminAuth.js';

const orderRouter = express.Router();

orderRouter.post('/place',auth,placeOrder);
orderRouter.post('/stripe',auth,placeOrderStripe);
orderRouter.post('/razor',auth,placeOrderRazorPay);

orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateOrder);

orderRouter.post('/userorders',auth,userOrders);

//verifyStripe Route

orderRouter.post('/verifyStripe',auth,verifyStripe);

export default orderRouter; 