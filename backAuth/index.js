const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();

app.use(express.json());

mongoose.connect('mongodb://localhost/dbProfile',{ useUnifiedTopology: true ,useNewUrlParser: true} )
.then(()=>console.log("connected to mongodb..."))
.catch(err=>console.log('cannot connected to mongodb...'))
app.use(cors());

//app.use('/auth',);

port=process.env.PORT ||4000;
app.listen(port,()=>console.log("listen on port"+port));



