const ApplyRequest = require("../models/ApplyRequest");
const bcrypt= require(`bcryptjs`);

const applyRequest_all = async (req, res) => {
    try{
const applyRequests = await ApplyRequest.find();
res.json(applyRequests);
    } catch(error) {
        res.json({message:error});
    }
};





const applyRequest_create = async (req, res) => {
    let success=false;
    //if there are errors return bad request and the errors
   
    


    
    //creating new admin
    applyRequest = ApplyRequest.create(
        {
            name:req.body.name,
            mobile_number:req.body.mobile_number,
            address:req.body.address,
            adharcard_number:req.body.adharcard_number,
            experience:req.body.experience,
            title: req.body.title,
            description : req.body.description,
            tag : req.body.tag,
            salary : req.body.salary
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








const applyRequest_delete = async (req, res) => {
    try {
        const removeApplyRequest = await ApplyRequest.findByIdAndDelete(req.params.applyRequest);
        res.json(removeApplyRequest);
      } catch (error) {
        res.json({ message: error });
      }

};

module.exports = {
    applyRequest_all,
    applyRequest_create,
    applyRequest_delete
}

