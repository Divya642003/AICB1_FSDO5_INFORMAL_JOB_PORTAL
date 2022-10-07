const dotenv = require("dotenv");
const Admin = require("../../models/Admin");
const Applicant = require("../../models/Applicant");
const Recuiter = require("../../models/Recuiter");

const jwt=require(`jsonwebtoken`);
const {body, validationResult}= require(`express-validator`);
const bcrypt= require(`bcryptjs`);




const admin_login = async (req,res)=>{
    //console.log(req.body);
    let success=false;
    //if there are errors return bad request and the errors
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    try
    {
        let admin= await Admin.findOne({email:req.body.email});
        if(!admin)
        {
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }
        const passwordCompare= await bcrypt.compare(req.body.password,admin.password);
        if(!passwordCompare){
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }
        const data={
            admin:{
                id:admin.id
            }
        };

        //jwt token that will provide secure access to user
        const authToken=jwt.sign(data,process.env.JWT_SECRET);
        success=true;
        tokenfor= "admin";
        //console.log(authToken);
        res.json({success,tokenfor,authToken});
        

    }catch(err)
    {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }

    
}




const applicant_login = async (req,res)=>{
    //console.log(req.body);
    let success=false;
    //if there are errors return bad request and the errors
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    try
    {
        let applicant= await Applicant.findOne({mobile_number:req.body.mobile});
        console.log(applicant);
        if(!applicant)
        {
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }

        const passwordCompare= await bcrypt.compare(req.body.password,applicant.password);

        if(!passwordCompare){
            return res.status(400).json({success,error:"Please to login with correct credentials"});
        }
        const data={
            applicant:{
                id:applicant.id
            }
        };

        //jwt token that will provide secure access to user
        const authToken=jwt.sign(data,process.env.JWT_SECRET);
        success=true;
        tokenfor= "applicant";
        //console.log(authToken);
        res.json({success,tokenfor,authToken});
        

    }catch(err)
    {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }

    
}




const recuiter_login = async (req,res)=>{
    //console.log(req.body);
    let success=false;
    //if there are errors return bad request and the errors
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    try
    {
        let recuiter= await Recuiter.findOne({mobile_number:req.body.mobile});
        if(!recuiter)
        {
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }
        const passwordCompare= await bcrypt.compare(req.body.password,recuiter.password);
        if(!passwordCompare){
            return res.status(400).json({success,error:"Please to login with correct credentials"});
        }
        const data={
            recuiter:{
                id:recuiter.id
            }
        };

        //jwt token that will provide secure access to user
        const authToken=jwt.sign(data,process.env.JWT_SECRET);
        success=true;
        tokenfor= "recuiter";
        //console.log(authToken);
        res.json({success,tokenfor,authToken});
        

    }catch(err)
    {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }

    
}




module.exports = {
    admin_login,
    recuiter_login,
    applicant_login
}
