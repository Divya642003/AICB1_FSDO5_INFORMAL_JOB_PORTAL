const Recuiter = require("../models/Recuiter");
const {body, validationResult}= require(`express-validator`);
const bcrypt= require(`bcryptjs`);

const recuiter_all = async (req, res) => {
    try{
const recuiters = await Recuiter.find();
res.json(recuiters);
    } catch(error) {
        res.json({message:error});
    }
};



const recuiter_details = async (req, res) => {
    try{
        const recuiter = await Recuiter.findById(req.params.recuiterId);
        res.json(recuiter);
            } catch(error) {
                res.json({message:error});
            }

};


const recuiter_create = async (req, res) => {
    let success=false;
    //if there are errors return bad request and the errors
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors:errors.array()});
    }
    
    //check whether the applicant with same email exists already
    //console.log(recuiter);
    let recuiter = await Recuiter.findOne({mobile_number:req.body.mobile_number});
    //console.log(applicant);
    if(recuiter){
        return res.status(400).json({success,error:"Sorry a recuiter with this mobile number already exists"});
    }

    //ecrypting password before storing
    const salt= await bcrypt.genSalt(10);
    secPasswd = await bcrypt.hash(req.body.password,salt);

    
    //creating new admin
    recuiter= Recuiter.create(
        {
            name:req.body.name,
            password:secPasswd,
            mobile_number:req.body.mobile_number,
            address:req.body.address,
            adharcard_number:req.body.adharcard_number
        }
    ).then( 
        //if admin is created this will be executed

       res.json("Success")
        )
    .catch(err=>{
    //if there is some error while creating admin this will be executed
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
    );
    
    };







const recuiter_update = async (req, res) => {
    try {
        const recuiter = {
         name: req.body.name,
          password: req.body.password,
          address: req.body.address,
          mobile_number: req.body.mobile_number,
          adharcard_number: req.body.adharcard_number,
          date: req.body.date,
        };
    
        const updatedRecuiter = await Recuiter.findByIdAndUpdate(
          { _id: req.params.recuiterId },
          recuiter
        );
        res.json(updatedRecuiter);
      } catch (error) {
        res.json({ message: error });
      }




};




const recuiter_delete = async (req, res) => {
    try {
        const removeRecuiter = await Recuiter.findByIdAndDelete(req.params.recuiterId);
        res.json(removeRecuiter);
      } catch (error) {
        res.json({ message: error });
      }

};

module.exports = {
    recuiter_all,
    recuiter_details,
    recuiter_create,
    recuiter_update,
    recuiter_delete
}

