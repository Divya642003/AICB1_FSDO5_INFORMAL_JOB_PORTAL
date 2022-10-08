const mongoose = require(`mongoose`);
const {Schema}=mongoose;
const ApplyRequestSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    mobile_number:{
        type:Number,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    address:
    {
        type:String,
        required:true
    },
    adharcard_number:{
        type:String,
        required:true,
        unique:true
    },
    experience:{
        type: String,
        required: true
    },
    
    title:
    {
        type:String,
        required:true
    },

    description:
    {
        type:String,
        required:true
    },

    tag:
    {
        type:String,
        default:"General"  
    },
    salary:
    {
        type:Number,
        required:true
    }


})

const ApplyRequest=mongoose.model(`applyrequest`,ApplyRequestSchema);
//Applicant.createIndexes();
module.exports= ApplyRequest;