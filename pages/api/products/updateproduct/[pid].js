import Product from "../../../modals/product"
import connectToDb from '../../../middleware/connect'
 let handler = async(req, res)=>{
     if(req.method === 'PUT'){
        const { pid } = req.query
        await Product.findByIdAndUpdate(pid, req.body);
         res.status(200).json({'success':'succssfully updated'})
        }else{
            res.status(400).json({'error':"this method is not available on this api"})
        }
  }
export default connectToDb(handler);