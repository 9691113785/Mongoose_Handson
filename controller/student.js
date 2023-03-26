
const {Information} = require("../models/student");

const studentEnrollment = async(req,res)=>{
    const studentData = req.body;

   try{
    const information = new Information({
        firstName : studentData.firstName,
        lastName: studentData.lastName,
        age:studentData.age,
        email:studentData.email,
        mobile:studentData.mobile,
        

    });
    const validatersult = information.validateSync()
    const dbResponse = await information.save();
    // await Information.insertMany([information]) 
    console.log("Data is saved", dbResponse);
    return res.status(200).send({message : dbResponse});
    

   }
   catch(error){
    console.log("Error in Operating", error.message)
    return res.status(500).send({message : error.message})

   }

    
}


const findStudent = async(req,res)=>{

    try{
        const queryparam = req.query;
       
        const dbResponse = await Information.find(queryparam  )
        return res.status(200).send({message:dbResponse})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
   
   }


const UpdateStudent = async(req,res)=>{

    try{
        const studata = req.body;
        const filter = studata.filter;
        const value = {$set:studata.value};
        const dbResponse = await Information.updateMany(filter,value)
        return res.status(200).send({message:dbResponse})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
   
   }

   const deleteStudent = async(req,res)=>{

    try{
        const queryparam = req.query;
       
        const dbResponse = await Information.deleteOne(queryparam)
        return res.status(200).send({message:dbResponse})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
   
   }


module.exports = {
    studentEnrollment,UpdateStudent,deleteStudent,findStudent
}


// const mongoClient = require("../database/connection")
// const data = require('../data')
// const studentEnrollment = async (req, res) => {
//     // const studentData = req.body;

//     const studentData = data;
//     try {
//         const result = await mongoClient.insertToDB(studentData);
//         console.log("the result of database operation", result)
//         return res.status(200).send({ message: result })


//     } 
//     catch (error) {
//         console.log("Something Went Wrong");    
//         return res.status(500).send({ message: `Something Wrong ${error}`})

//     }

// }

// const getStudentData = async(req,res) =>{

// // const queryparams = req.query;
// const query = {id:{$gt:15}}

// try{
//     const result = await mongoClient.findInDb(query);
//     console.log("result is", result)
//     return res.status(200).send(result)
// }
// catch (error) {
//     console.log("Something Went Wrong");
//     return res.status(500).send({ message: `Something went wrong ${error}` })

// }
    
// }

// const getStudentDataByCategory = async(req,res) =>{

//     // const queryparams = req.query;
//     const query = {category:"Bollywood"}
    
//     try{
//         const result = await mongoClient.findInDb(query);
//         console.log("result is", result)
//         return res.status(200).send(result)
//     }
//     catch (error) {
//         console.log("Something Went Wrong");
//         return res.status(500).send({ message: `Something went wrong ${error}` })
    
//     }
        
//     }

// const studentUpdate= async(req,res) =>{

//     const updateData = req.body;
//     const filter = updateData.filter;
//     const value={$set:updateData.value}
   
//     try{
//         const result = await mongoClient.updateInDb(filter, value);
//         console.log("result is", result)
//         return res.status(200).send(result)
//     }
//     catch (error) {
//         console.log("Something Went Wrong");
//         return res.status(500).send({ message: `Something went wrong ${error}` })
    
//     }
        
//     }


//     const studentDelete= async(req,res) =>{

       
// const queryparams = req.query;
// console.log(queryparams)
// try{
//     const result = await mongoClient.deleteInDb(queryparams);
//     console.log("result is", result)
//     return res.status(200).send(result)
// }
// catch (error) {
//     console.log("Something Went Wrong");
//     return res.status(500).send({ message: `Something went wrong ${error}` })

// }
            
//         }




// module.exports = {
//     studentEnrollment,getStudentData,studentUpdate,studentDelete,getStudentDataByCategory
// }