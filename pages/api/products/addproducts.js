import Product from "../../modals/product"
import connectToDb from '../../middleware/connect'
let handler = async(req, res)=>{
    if(req.method === 'POST'){
        req.body.forEach(async(val)=>{
            let product = new Product(val);
            await product.save();
        })
        res.status(200).json({'success':'successfully added'});
    }else{
        res.status(400).json({'error':"this method is not allowed"})
    }
  }
export default connectToDb(handler);