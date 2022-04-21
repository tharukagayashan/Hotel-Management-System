const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

const PORT = process.env.PORT || 8070;
const MONGODB_URL = "mongodb+srv://admin:admin@cluster0.mdeqy.mongodb.net/User-Authentication-DB?retryWrites=true&w=majority" || process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGODB_URL,{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB connected");
}).catch((err)=>{
    console.log(err);
});

const userRouter = require("./routes/users");
app.use("/user",userRouter);

app.route("/").get((req,res)=>{
    res.send("<center><h1>🔐 User Authentication API</h1><h3>Developed by Tharuka Gayashan Fernando</h3></center>")
})

app.listen(PORT,()=>{
    console.log(`Server up and run on port ${PORT}`);
});