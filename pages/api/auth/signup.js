import User from "../../../modals/user"
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs')
import connectToDb from '../../../middleware/connect'
let handler = async(req, res)=>{
    if(req.method === 'POST'){
            let key = 'Devansh@#$';
            let user = await User.findOne({ email: req.body.email });
            console.log(user);
            if (user) {
              res
                .status(400)
                .json({msg: "sorry a user with this email already exists" });
            } else {
              const salt = await bcrypt.genSalt(10);
              let secPass = await bcrypt.hash(req.body.Password, salt);
              user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email,
              });
              let data = {
                user: {
                  id: user.id,
                },
              };
              const authToken = jwt.sign(data, key);
              res.json({authToken });
      
            }
        }else{
        res.status(400).json({'error':"this method is not allowed"})
    }
  }
export default connectToDb(handler);