const mongoose = require(`mongoose`);
const {Schema}=mongoose;

const JobSchema = new Schema({
    
    recuiter:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'recuiter'
    },
    date:{
        type:Date,
        default:Date.now
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

module.exports= mongoose.model(`job`,JobSchema);