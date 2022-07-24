import Product from "../../modals/product"
import connectToDb from '../../middleware/connect'
 let handler = async(req, res)=>{
    let Products = await Product.find();
    res.status(200).json(Products)
  }
export default connectToDb(handler);