const mongoose = require(`mongoose`);
const {Schema}=mongoose;
const ApplicantSchema = new Schema({
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
    }

})

const Applicant=mongoose.model(`applicant`,ApplicantSchema);
//Applicant.createIndexes();
module.exports= Applicant;