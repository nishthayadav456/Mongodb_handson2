const{MongoClient}=require("mongodb")
const url="mongodb://127.0.0.1:27017"
const mongoserver=new MongoClient(url)
console.log(mongoserver)
const connection =async()=>{
    try{
        await mongoserver.connect()
        console.log("connection made successfully")
    }
    catch(err){
        console.log("error during connection with our DB",err)
    }
}
const database=mongoserver.db("Human_Resource") //database name 
module.exports={connection,database}