const mongoose = require(`mongoose`);
const {Schema}=mongoose;
const RecuiterSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    mobile_number:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
    adharcard_number:{
        type:String,
        required:true,
        unique:true
    },
    address:
    {
        type:String,
        required:true
    }

})

const Recuiter=mongoose.model(`recuiter`,RecuiterSchema);
//Recuiter.createIndexes();
module.exports= Recuiter;