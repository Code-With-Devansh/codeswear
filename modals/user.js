let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:Number, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    defaultAddress:{type:Object}
});
mongoose.models = {};
export default mongoose.model('User', UserSchema)