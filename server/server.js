//framework configuration
const express=require("express");  //need to install express for libraries
const connectDb=require("./config/dbConnection");
const errorHandler=require("./middleware/errorHandler"); //when server is giving error, error handle krne ke liye errorhandling, errorhandling is kind of middleware //middleware->acts as a gaurd
const cors = require("cors"); //helps in identity verify, so that safety breach does not happen while getting apis

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

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

app.get("/home",(req,res)=>{
    //let user=User.findOne({id:})
    res.render("home",{})
})

app.get("/allusers",(req,res)=>{
    res.render("users",{
        users:[{id:1,username:"Nitesh",
            age:23},{id:1,username:"Akash",
                age:56
            }]
    });
})

//app config start
app.listen(port, ()=>{
    console.log(`Server running on port http://localhost:${port}`);
});

app.set('view engine', 'hbs');