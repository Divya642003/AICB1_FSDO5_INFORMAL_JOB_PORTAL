const dotenv = require("dotenv");
const mongoose= require(`mongoose`);
dotenv.config();
const connectToMongo = ()=>{
mongoose.connect( process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true

}).then(() => {
    console.log("success");
  }).catch((err) => console.log("not connect" + err));

}

module.exports = connectToMongo;