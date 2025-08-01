import jwt from 'jsonwebtoken'

const auth = (req,res,next) =>{
    const {token} = req.headers;

    if(!token){
        
        return res.json({success:false,message:"Not Authorised Login Again"})  
    }

    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId =  token_decode.id;
        next();

    } catch (error) {
        console.log(error);
        req.json({success:false,message:error.message})
    }

    
}

export default auth;