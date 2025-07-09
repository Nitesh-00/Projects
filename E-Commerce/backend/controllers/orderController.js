import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
    try {

        const { userId, items, amount, address } = req.body;

        const userData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: new Date()
        }

        const newOrder = new orderModel(userData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ success: true, message: "Order Placed" })

    } catch (error) {
        // console.log(error);
        res.json({ success: false, message: error.message });

    }

}

const placeOrderStripe = async (req, res) => {


}

const placeOrderRazorPay = async (req, res) => {


}

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
    
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

const allOrders = async (req, res) => {


}

const updateOrder = async (req, res) => {

}

export { placeOrder, updateOrder, allOrders, placeOrderRazorPay, placeOrderStripe, userOrders }