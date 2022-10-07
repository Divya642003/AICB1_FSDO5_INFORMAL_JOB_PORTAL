const connectToMongo = require(`./db`);

const express = require(`express`);
var cors=require(`cors`);
connectToMongo();

const app= express();



const port = 6000;

app.use(cors());

app.use(express.json());

app.use(`/api/admin`,require(`./routes/admin`));
app.use(`/api/applicant`, require(`./routes/applicant`));
app.use(`/api/recuiter`, require(`./routes/recuiter`));
app.use(`/api/job`, require(`./routes/job`));

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use(`/api/auth`, require(`./routes/login/login`));

app.listen(port,()=>
{
    console.log("Listening to port ");
})


