const Applicant = require("../models/Applicant");
const {body, validationResult}= require(`express-validator`);
const bcrypt= require(`bcryptjs`);

const applicant_all = async (req, res) => {
    try{
const applicants = await Applicant.find();
res.json(applicants);
    } catch(error) {
        res.json({message:error});
    }
};



const applicant_details = async (req, res) => {
    try{
        const applicant = await Applicant.findById(req.params.applicantId);
        res.json(applicant);
            } catch(error) {
                res.json({message:error});
            }

};


const applicant_create = async (req, res) => {
    let success=false;
    //if there are errors return bad request and the errors
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors:errors.array()});
    }
    
    //check whether the applicant with same email exists already
    //console.log(applicant);
    let applicant=await Applicant.findOne({mobile_number:req.body.mobile_number});
    //console.log(applicant);
    if(applicant){
        return res.status(400).json({success,error:"Sorry a applicant with this mobile number already exists"});
    }

    //ecrypting password before storing
    const salt= await bcrypt.genSalt(10);
    secPasswd = await bcrypt.hash(req.body.password,salt);

    
    //creating new admin
    applicant=Applicant.create(
        {
            name:req.body.name,
            password:secPasswd,
            mobile_number:req.body.mobile_number,
            address:req.body.address,
            adharcard_number:req.body.adharcard_number,
            experience:req.body.experience
        }
    ).then( 
            res.json("success")
        )
    .catch(err=>{
        //if there is some error while creating admin this will be executed
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
    );
    
    };







const applicant_update = async (req, res) => {
    try {
        const salt= await bcrypt.genSalt(10);
        secPasswd = await bcrypt.hash(req.body.password,salt);
        const applicant = {
            name: req.body.name,
          password: secPasswd,
          address: req.body.address,
          mobile_number: req.body.mobile_number,
          adharcard_number: req.body.adharcard_number,
          experience: req.body.experience
        };
    
        const updatedApplicant = await Applicant.findByIdAndUpdate(
          { _id: req.params.applicantId },
          applicant
        );
        res.json(updatedApplicant);
      } catch (error) {
        res.json({ message: error });
      }




};




const applicant_delete = async (req, res) => {
    try {
        const removeApplicant = await Applicant.findByIdAndDelete(req.params.applicantId);
        res.json(removeApplicant);
      } catch (error) {
        res.json({ message: error });
      }

};

module.exports = {
    applicant_all,
    applicant_details,
    applicant_create,
    applicant_update,
    applicant_delete
}

