let mongoose = require('mongoose');
let OrderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    products:[
        {
            productId:{type:mongoose.Types.ObjectId,
            required:true,},
            quantity:{type:Number, required:true}
        }
    ],
    address:{pincode:{type:Number, required:true}, address:{type:Number, required:true}},
    status:{type:String, default:'Pending', required:true}
}, {timestamps:true});
mongoose.models = {}
export default mongoose.model('Order', OrderSchema)