import userModel from "../models/userModel.js";

const addItem = async (req,res) => {
    
    try {
        const {userId,id,size} = req.body;
        const userData = await userModel.findById(userId);
        const cartData =  userData.cartData;
        if(cartData[id]){
            if(cartData[id][size]){
                cartData[id][size]++;
            }else{
                cartData[id][size]=1;
            }
        }else{
            cartData[id] ={};
            cartData[id][size]=1;
        }

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Added to Cart "})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}

const updateItem = async (req,res) => {
    try {
        const {userId,itemId,size,quantity} = req.body;
        const userData = await userModel.findById(userId);
        const cartData =  userData.cartData;
        cartData[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Cart Updated"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const getUserCart = async (req,res) => {
    try {
        const {userId} = req.body;
         const userData = await userModel.findById(userId);
        const cartData =  userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {addItem,updateItem,getUserCart}