const { default: mongoose } = require("mongoose")

const dbconnection = async(req,res)=>{
   try {
     await mongoose.connect("mongodb://localhost:27017/")
     console.log("connect to db");
   } catch (error) {
    console.log("error");
    
   }
    
};

module.exports = dbconnection;
