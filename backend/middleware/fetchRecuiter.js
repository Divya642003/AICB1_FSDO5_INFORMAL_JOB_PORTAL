const jwt = require(`jsonwebtoken`);

const JWT_SECRET="graphicerahilluniversity2022";

const fetchRecuiter = (req,res,next)=>
{

    //getting recuiter from jwt token

    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});
    }

    try{
        const data= jwt.verify(token,JWT_SECRET);
        req.recuiter=data.recuiter;
        next();
    }catch(error)
    {
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
}