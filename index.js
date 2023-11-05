const express=require("express")
const route=require("./router/productRouter")
const{connection}=require("./config/db")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use("/api",route)
app.get("/",(req,res)=>{
    res.send("this is a home page")
})
app.listen(5000,async()=>{
   try{
    await connection()
    console.log("server is running after making a  connection on port no 5000")
   }
   catch(err){
    console.log("error")
   }
})