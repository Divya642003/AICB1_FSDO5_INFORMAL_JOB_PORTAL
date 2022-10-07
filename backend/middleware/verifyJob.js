const dotenv = require("dotenv");
const jwt = require(`jsonwebtoken`);

const verifyJob = (req,res,next)=>
{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});
    }

    try{
        const data= jwt.verify(token, process.env.JWT_SECRET);
        req.user=data.user;
        next();
    }catch(error)
    {
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
}

module.exports = fetchUser;