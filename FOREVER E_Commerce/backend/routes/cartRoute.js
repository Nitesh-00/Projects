import express  from 'express'
import {addItem,updateItem,getUserCart} from '../controllers/cartController.js'
import auth from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add',auth,addItem);
cartRouter.post('/update',auth,updateItem);
cartRouter.post('/get',auth,getUserCart);

export default cartRouter;