const express = require("express")

const userRouter =require("./users/user.router").router



const app = express()
app.use(express.json())

app.use("/hola",(req,res)=>{
    res.json({message:"hola",method :req.method})
})

app.use("/api/v1",userRouter)





app.listen(8000,()=>{
    console.log("server started at port 8000")
})