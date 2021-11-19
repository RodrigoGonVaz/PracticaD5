const mongoose          =require("mongoose")

const connectDB = async() =>{
    await mongoose.connect(process.env.MONGODB)
    console.log("Bata base connected")
}

module.exports = connectDB