import Product from "../../modals/product"
import connectToDb from '../../middleware/connect'
let handler = async(req, res)=>{
    if(req.method === 'POST'){
        let product = new Product(req.body)
        product.save();
        res.status(200).json(product);
    }else{
        res.status(400).json({'error':"this method is not allowed"})
    }
  }
export default connectToDb(handler);