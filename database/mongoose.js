const mongoose = require('mongoose');

// const url = "mongodb://127.0.0.1:27017/newdatabase"
const url = "mongodb+srv://alokkushwaha96300:Alok2000@cluster0.ztxbbuz.mongodb.net/detailss?retryWrites=true&w=majority"
const connect = async ()=>{

    try{
console.log("connecting to mongodb...")
        const dbConn = await mongoose.connect(url);
      
        
    }
    catch(error){
        console.log("error in connecting",error.message)

    }
}

module.exports = connect; 




