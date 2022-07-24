import User from "../../../modals/user"
import connectToDb from '../../../middleware/connect'
var jwt = require('jsonwebtoken');
let handler = async(req, res)=>{
    if(req.method === 'POST'){
        
        try{
            let key = 'Devansh@#$';
            let user = User.findOne({email:req.body.email}, (err, data)=>{
                if(err){
                    console.log(err);
                }
                let authToken = jwt.sign(data.id, key)
                res.status(200).json({authToken})
            });

        }
        catch(err){
            res.status(400).json({'error':"please enter correct credentials"})
        }
    }else{
        res.status(400).json({'error':"this method is not allowed"})
    }
  }
export default connectToDb(handler);