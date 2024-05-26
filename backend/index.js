const express=require("express")
const cors=require("cors")
const connectDB=require("./config/db")
require("dotenv").config()
const todoRoutes=require("./routes/todo")


const app=express()
connectDB()


app.use(cors())
app.use(express.json());


app.use("/api/v1/todo",todoRoutes)


const PORT=process.env.PORT || 8084


app.listen(PORT, () => {
    console.log("Server is listning on PORT",PORT);
});
  
  