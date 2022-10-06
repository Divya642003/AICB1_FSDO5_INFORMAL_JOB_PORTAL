const Admin = require("../models/Admin");
const jwt=require(`jsonwebtoken`);


const admin_all = async (req, res) => {
    try{
const admins = await Admin.find();
res.json(admins);
    } catch(error) {
        res.json({message:error});
    }
};



const admin_details = async (req, res) => {
    try{
        const user = await Admin.findById(req.params.adminId);
        res.json(user);
            } catch(error) {
                res.json({message:error});
            }

};

const admin_create = async (req, res) => {
let {name, password, date, email} = req.body;
const admin = new Admin({name, password, date, email});
try{
    const saveAdmin = await admin.save();
    res.send(saveAdmin);
} catch(error) {
    res.status(400).send(error);
}

};

const admin_update = async (req, res) => {
    try {
        const admin = {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
          date: req.body.date
        };
    
        const updatedAdmin = await Admin.findByIdAndUpdate(
          { _id: req.params.adminId },
          admin
        );
        res.json(updatedAdmin);
      } catch (error) {
        res.json({ message: error });
      }




};

const admin_delete = async (req, res) => {
    try {
        const removeAdmin = await Admin.findByIdAndDelete(req.params.adminId);
        res.json(removeAdmin);
      } catch (error) {
        res.json({ message: error });
      }

};

module.exports = {
    admin_all,
    admin_details,
    admin_create,
    admin_update,
    admin_delete
}

