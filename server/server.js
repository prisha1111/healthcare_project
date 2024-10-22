//framework configuration
const express=require("express");  //need to install express for libraries
const connectDb=require("./config/dbConnection");
const errorHandler=require("./middleware/errorHandler"); //when server is giving error, error handle krne ke liye errorhandling, errorhandling is kind of middleware //middleware->acts as a gaurd
const cors = require("cors"); //helps in identity verify, so that safety breach does not happen while getting apis

//env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app=express();
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//error handling middleware
app.use(errorHandler);


//routes below
app.get('/',(req,res)=>{
    res.send("working");
});


//app config start
app.listen(port, ()=>{
    console.log(`Server running on port http://localhost:${port}`);
});

