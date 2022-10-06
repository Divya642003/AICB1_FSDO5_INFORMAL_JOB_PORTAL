const Recuiter = require("../models/Recuiter");


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
    let {name, mobile_number, address, adharcard_number, password, date} = req.body;
    const recuiter = new Recuiter({name, mobile_number, address, adharcard_number, password, date});
    try{
        const saveRecuiter = await recuiter.save();
        res.send(saveRecuiter);
    } catch(error) {
        res.status(400).send(error);
    }
    
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

