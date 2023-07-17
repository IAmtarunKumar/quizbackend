const express = require("express");
const cors = require('cors');
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors());

const {userRouter} = require("./Routes/User.route")
const {quizRouter} = require("./Routes/Quiz.route")



const {connection} = require("./db")

app.get("/", (req,res) =>{
    res.send("Welcome to Backend of Quiz App")
})

app.use("/api", userRouter)
app.use("/api", quizRouter)

app.listen(process.env.port || 8080, async () => {
    try{
        await connection
        console.log("Connected")
    } catch(err){
        console.log(err.message)
    }
    console.log(` ${process.env.port} port is working`)
})
