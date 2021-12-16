const mongoose =require('mongoose');
const express = require('express');
const cors =require('cors');
const{ json}=require("express");
const todoRoutes =require("./Routes/todoRoutes");

const app =express();
const port =3000;
app.use(cors());
app.use(json());
app.get('/', function (req,res){
    res.send('welcome To homepage',)
   
});
app.use("/todos",todoRoutes);


app.listen(port,function(){
    console.log(`Listen on http://localhost:${port}`);

});
const dbURI=" mongodb+srv://patience:patience1993@project-cluster1.bierp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
.connect( dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(function(response){

    console.log("connected to mongodb");
})
.catch(function(err){ 
    console.log( "could not connect to mongodb");

})
.catch((err)=>console.log(err));
