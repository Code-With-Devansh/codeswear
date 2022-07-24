let mongoose = require('mongoose');
let ProductSchema = new mongoose.Schema({
    brand:{type:String, required:true},
    title:{type:String, required:true},
    category:{type:String, required:true},
    quantity:{type:Number, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    color:{type:Array, required:true},
    price:{type:Number, required:true},
    otherProperties:{type:Object}
});
mongoose.models = {}
export default mongoose.model('Product', ProductSchema)