const express = require("express");
const app  = express();
const PORT = 2000;


app.get("/",(req,res)=>{
  res.status(200).send("Hey there")
})

app.get("/home",(req,res)=>{
    res.send("Welcome to home page")
  })
  
  app.get("/contact",(req,res)=>{
    res.send("Contact us at")
  })
   
  //get.json 
  app.get("/Instagram",(req,res)=>{
    const insta = {
      username : "InstagramOfficial",
      followers : 100,
      following : 10,
    }
    res.status(200).json({insta})
  })


  //param
  app.get("/users/:token",(req,res)=>{
    res.status(200).json({ user: req.params.token})
  })



app.listen(PORT,()=>{
    console.log(`Server is up and running ${PORT}`);
})