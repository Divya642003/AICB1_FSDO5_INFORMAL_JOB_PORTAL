const Admin = require("../models/Admin");
const jwt=require(`jsonwebtoken`);
const {body, validationResult}= require(`express-validator`);
const bcrypt= require(`bcryptjs`);
const JWT_SECRET="graphicerahilluniversity2022";

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
        const admin = await Admin.findById(req.params.adminId);
        res.json(admin);
            } catch(error) {
                res.json({message:error});
            }

};

const admin_create = async (req, res) => {
    let success=false;
    //if there are errors return bad request and the errors
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors:errors.array()});
    }
    
    //check whether the admin with same email exists already
    let admin=await Admin.findOne({email:req.body.email});
    if(admin){
        return res.status(400).json({success,error:"Sorry a admin with this email already exists"});
    }

    //ecrypting password before storing
    const salt= await bcrypt.genSalt(10);
    secPasswd = await bcrypt.hash(req.body.password,salt);

    
    //creating new admin
    admin=Admin.create(
        {
            name:req.body.name,
            password:secPasswd,
            email:req.body.email,

        }
    ).then( 
        //if admin is created this will be executed
        admin=>{
            const data={
                admin:{
                    id:admin.id
                }
            };

            //jwt token that will provide secure access to admin
            const authToken=jwt.sign(data,JWT_SECRET);
            success=true;
            //console.log(authToken);
            res.json({success,authToken});}
        )
    .catch(err=>{
        //if there is some error while creating admin this will be executed
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
    );

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

const admin_login=async (req,res)=>{
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

        //jwt token that will provide secure access to admin
        const authToken=jwt.sign(data,JWT_SECRET);
        success=true;
        //console.log(authToken);
        res.json({success,authToken});
        

    }catch(err)
    {
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }

    
}

module.exports = {
    admin_all,
    admin_details,
    admin_create,
    admin_update,
    admin_delete,
    admin_login
}

