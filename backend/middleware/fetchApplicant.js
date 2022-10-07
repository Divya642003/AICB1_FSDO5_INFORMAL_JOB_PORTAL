const jwt = require(`jsonwebtoken`);

const JWT_SECRET="graphicerahilluniversity2022";

const fetchApplicant = (req,res,next)=>
{

    //getting applicant from jwt token

    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});
    }

    try{
        const data= jwt.verify(token,JWT_SECRET);
        req.applicant=data.applicant;
        next();
    }catch(error)
    {
        res.status(401).send({error:"Please authenticate using a valid token"});
    }
}