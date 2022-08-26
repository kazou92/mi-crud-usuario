const express = require("express")

const userRouter =require("./users/user.router").router



const app = express()
app.use(express.json())

app.use("/hola",(req,res)=>{
    res.json({message:"hola",method :req.method})
})

app.use("/api/v1",userRouter)

// app.get("/user",(req, res)=>{
//     res.status(200).json(userDB)
// })

// app.get("/user/:id",(req, res)=>{
//     const id = Number(req.params.id)
//     const filterDB = userDB.filter(item => item.id === id)
//     if(filterDB.length > 0){
//         res.status(200).json(filterDB[0])

//     }else{
//         res.status(400).json({message:"ID invalido"})
//     }
// })



// app.post("/user",(req, res) => {

//     const data =req.body
//     // userDB.push(data)
//     // res.status(201).json(userDB)
//     if(userDB.length === 0){
//         const newUser ={
//             id:1,
//             ...data
//         }
//         userDB.push(newUser)
//     }else{
//         const newUser ={
//             id: userDB[userDB.length -1 ].id + 1 ,
//             ... data
//         }
//         userDB.push(newUser)
       
//     }
//     res.status(201).json(userDB)

// });


// app.delete("/user/:id",(req,res)=>{
//     const id = Number(req.params.id)
//     const index =userDB.findIndex(item =>item.id === id)
//     if(index != -1){
//         userDB.splice(index,1)
//     res.status(204).json()

//     }else{
//         res.status(400).json({message:"ID Invalido"})

//     }
    


// });


// app.put("/user/:id",(req,res)=>{
//     const id = Number(req.params.id)
//     const data =req.body
//     const index =userDB.findIndex(item =>item.id === id)
//     userDB[index] ={
//         id,
//         ...data
//     }
//     res.status(200).json(userDB)

// });



app.listen(8000,()=>{
    console.log("server started at port 8000")
})