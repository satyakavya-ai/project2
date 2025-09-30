var mongoose = require("mongoose")
async function connectToDatabase() {
    try{
        await mongoose.connect(process.env.URL)
        console.log("connected")

    }catch(error){
        console.log("error",error);
    }
}
module.exports = connectToDatabase