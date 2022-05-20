import User from "../../../modals/user"
import connectToDb from '../../../middleware/connect'
let jsonwebtoken = require('jwt')
let handler = async(req, res)=>{
    if(req.method === 'POST'){
        try{
            let userid = 
            user = User.findOne({id:userid})
            res.status(200).json('successfully created the user');
        }
        catch(err){
            res.status(400).json({'error':"please enter correct credentials"})
        }
    }else{
        res.status(400).json({'error':"this method is not allowed"})
    }
  }
export default connectToDb(handler);