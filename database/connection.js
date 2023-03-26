// const { MongoClient } = require("mongodb");

// const url = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(url);

// const insertToDB = async (data) => {
    
    
//     const database = client.db("details");
//     const collection = database.collection("information");
//     await client.connect();
//     const dbresponse = await collection.insertMany(data);
//     await client.close();
//     return dbresponse;
// }

// const findInDb = async (query)=>{
//     try{
//         const database = client.db("details");
//         const collection = database.collection("information")
//         await client.connect();
//         const dbresponse = await collection.find(query).toArray();
//         await client.close();
//         return dbresponse
    

//     }
//     catch(error){
//         console.log(error)
//     }
   
  

// }

// const updateInDb = async (filter, value) =>{
//     try{
//         const database = client.db("details");
//         const collection = database.collection("information")
//         await client.connect();
//         const dbresponse = await collection.updateOne(filter, value);
//         await client.close();
//         return dbresponse
    

//     }
//     catch(error){
//         console.log(error)
//     }

// }

// const deleteInDb = async (filter) =>{
//     try{
//         const database = client.db("details");
//         const collection = database.collection("information")
//         await client.connect();
//         const dbresponse = await collection.deleteOne(filter);
//         await client.close();
//         return dbresponse
     

//     }
//     catch(error){
//         console.log(error)
//     }

// }

// module.exports = {
//     insertToDB, findInDb,updateInDb,deleteInDb
// }