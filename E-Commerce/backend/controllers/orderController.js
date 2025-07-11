import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const currency = "USD"
const deliveryCharge = 10

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
        console.log(error);
        res.json({ success: false, message: error.message });

    }

}

const placeOrderStripe = async (req, res) => {

    try {
        
        const { userId, items, amount, address } = req.body;

    const { origin } = req.headers;
    
    const userData = {
        userId,
        items,
        amount,
        address,
        paymentMethod: 'Stripe',
        payment: false,
        date: new Date()
    }

    const newOrder = new orderModel(userData);
    await newOrder.save();

    const line_items = items.map((item) =>({
        price_data:{
            currency:currency,
            product_data:{
                name:item.name
            },
            unit_amount:item.price*100
        },
        quantity:item.quantity
    }))
    
    line_items.push({
        price_data:{
            currency:currency,
            product_data:{
                name:"Delivery Charges"
            },
            unit_amount:deliveryCharge*100
        },
        quantity:1
    })

    const session = await stripe.checkout.sessions.create({
        success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
        line_items,
        mode:'payment'
    })

    res.json({success:true,session_url:session.url});

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const verifyStripe = async (req,res) =>{
    const {orderId,success,userId} = req.body;
        
    try {
        if(success == "true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            await userModel.findByIdAndUpdate(userId,{cartData:{}});
            res.json({success:true});
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false});
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
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
    try {

        const allItems = await orderModel.find({});
        console.log(allItems);

        res.json({ success: true, allItems });


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}

const updateOrder = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export {verifyStripe, placeOrder, updateOrder, allOrders, placeOrderRazorPay, placeOrderStripe, userOrders }