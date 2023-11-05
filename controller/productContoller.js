const {database}=require("../config/db")
const product=database.collection("employee") //collection name 
const addproductInStore=async(req,res)=>{
    const data1=req.body;
   const data= await product.insertMany([{
    "firstName": "John",
    "lastName": "Doe",
    "salary": "25000",
    "department": "HR",
    "lastCompany": "X",
    "lastSalary": "10000",
    "overallExp": "2",
    "contactInfo": "1234567890",
    "yearGrad": "2016",
    "gradStream": "CSE"

},{
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"
},{
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "roh",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
},{
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"
},{
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
},{
    "firstName": "Rohan",
    "lastName": "Jame",
    "salary": "30000",
    "department": "Technical",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "1",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "20000",
    "overallExp": "1",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "ECE"
},{
    "firstName": "Sao",
    "lastName": "Avika",
    "salary": "30000",
    "department": "Sales",
    "lastCompany": "Y",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "1234567860",
    "yearGrad": "2015",
    "gradStream": "CSE"
},{
    "firstName": "Jame",
    "lastName": "Doe",
    "salary": "35000",
    "department": "Accounts",
    "lastCompany": "Z",
    "lastSalary": "15000",
    "overallExp": "2",
    "contactInfo": "123567890",
    "yearGrad": "2019",
    "gradStream": "EEE"
}])
res.send({msg:"added successfully",data:data})
 }

const data2 = async (req, res) => {
    const data1=req.body;
    try {
        const data =await product.find({}).toArray(); // Use the find method to retrieve data from the collection
        res.send({msg:"Data retrieved successfully", data:data});
        console.log(data)
    } catch (error) {
     res.send("An error occurred while fetching data from the database.",error);
    }
};
const data3 = async (req, res) => {
    const data1=req.body;
    try {
        const data =await product.find({"salary":{$gt:"30000"}}).toArray(); // Use the find method to retrieve data from the collection
        res.send({msg:"salary retrieved successfully", data:data});
        console.log(data)
    } catch (error) {
      res.send("An error occurred while fetching data from the database.",error);
    }
};
const data4 = async (req, res) => {
    const data1=req.body;
    try {
        const data =await product.find({"overallExp":{$gt:"2"}}).toArray(); // Use the find method to retrieve data from the collection
        res.send({msg:"overall exprience above 2 years successfully", data:data});
        console.log(data)
    } catch (error) {
       res.send("An error occurred while fetching data from the database.",error);
    }
};
const data5 = async (req, res) => {
    const data1=req.body;
    try {
        const data =await product.find({"yearGrad": {$gt: "2015"},  "overallExp":{$gt: "1" }}).toArray(); // Use the find method to retrieve data from the collection
        res.send({msg:"who are graduated after 2015 and having exprience more than 1year comes successfully", data:data});
        console.log(data)
    } catch (error) {
       res.send("An error occurred while fetching data from the database.",error);
    }
};
const data6 = async (req, res) => {
    const data1=req.body;
    try {
        const data =await product.updateMany({"salary":{$gt: "70000"} }, {$set: {"salary":"65000"}}) // Use the updateMany method to retrieve data from the collection
        res.send({msg:"salary is greater than 70000 to 65000 comes successfully", data:data});
        console.log(data)
    } catch (error) {
        res.send("An error occurred while fetching data from the database.",error);
    }
};
const data7 = async (req, res) => {
    const data1=req.body;
    try {
        const data =await product.deleteMany({"lastCompany": "Y"}) // Use the deleteMany method to retrieve data from the collection
        res.send({msg:"Delete all the documents from employee where last company is Y", data:data});
        console.log(data)
    } catch (error) {
      res.send("An error occurred while fetching data from the database.",error);
    }
};

module.exports={addproductInStore,data2,data3,data4,data5,data6,data7}