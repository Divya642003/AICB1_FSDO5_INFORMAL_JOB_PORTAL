const Applicant = require("../models/Applicant");


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
    let {name, mobile_number, address, adharcard_number, password, date, experience} = req.body;
    const applicant = new Applicant({name, mobile_number, address, adharcard_number, password, date, experience});
    try{
        const saveApplicant = await applicant.save();
        res.send(saveApplicant);
    } catch(error) {
        res.status(400).send(error);
    }
    
    };







const applicant_update = async (req, res) => {
    try {
        const applicant = {
            name: req.body.name,
          password: req.body.password,
          address: req.body.address,
          mobile_number: req.body.mobile_number,
          adharcard_number: req.body.adharcard_number,
          experience: req.body.experience,
          date: req.body.date,
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

