import mongoose from 'mongoose'
let connectToDb = handler => async(req, res)=>{
    if(mongoose.connections[0].readyState){
        console.log('connected...');
        return handler(req, res);
    }
    await mongoose.connect(process.env.MONGO_URI);
    return handler(req, res)
};
export default connectToDb