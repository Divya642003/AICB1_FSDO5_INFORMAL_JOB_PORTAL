const dotenv = require("dotenv");
const jwt = require(`jsonwebtoken`);
const Admin = require("../models/Admin");
const Recuiter = require("../models/Recuiter");
const Applicant = require("../models/Applicant");

const verifyRecuiter = (req,res,next)=>
{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
    try{
        const data= jwt.verify(token, process.env.JWT_SECRET);
        var adminId = data.admin;
        var recuiterId = data.recuiter;
        var applicantId = data.applicant;
        if(adminId == undefined){
            if(applicantId == undefined){
            Recuiter.findById(recuiterId.id, function (err, Result) {
                if (err){
                    res.status(401).send({error:"Please authenticate using a valid token"});
                }
                else{
                    console.log("Recuiter Result : ", Result);
                    next();
                }
            });
        }
        else{
            Applicant.findById(applicantId.id, function (err, Result) {
                if (err){
                    res.status(401).send({error:"Please authenticate using a valid token"});
                }
                else{
                    console.log("Appliacnt Result : ", Result);
                    next();
                }
            });
        }
    }
        else{
            Admin.findById(adminId.id, function (err, Result) {
                if (err){
                    res.status(401).send({error:"Please authenticate using a valid token"});
                }
                else{
                    console.log("Admin Result : ", Result);
                    next();
                }
            });
        }           
    }catch(error)
    {
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
}
module.exports = verifyRecuiter;