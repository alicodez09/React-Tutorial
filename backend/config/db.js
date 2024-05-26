const mongoose=require("mongoose")

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongodb ${conn.connection.host}`);
    } catch (error) {
        console.log(`error in mongoose ${error}`);
    }
}
module.exports = connectDB