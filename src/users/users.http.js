const {getAllUsers,getUserById,createdUser, deleteUser, updateUser} =require("./users.controllers")

const getall = (req,res)=>{
    const data =getAllUsers()
    res.status(200).json({
        item:data.length,
        Response:data
    })
} 

const getId = (req,res)=>{
    const id =Number(req.params.id)
    if(id){
        const data =getUserById(id)
        if(data){
            res.status(200).json(data)
        }else{
            res.status(400).json({message:"ID invalid"})
        }
        res.status(200).json(data)
    }else{
        res.status(400).json({message:"ID is not a numbre"})
    }
   
}




const remove = (req,res) => {
    const id = Number(req.params.id)
    if(typeof id === "number"){
       const deleted = deleteUser(id)
       if(deleted){
        res.status(204).json({})

       }else{
        res.status(400).json({message:"try with another id"})
       }
        
    }else{
        res.status(404).json({message:"invalid ID"})
    }

}

const created = (req,res) =>{
    const data = req.body
    if(data.name && data.email && data.country && data.phone && data.age){
        const response = createdUser(data)
        res.status(201).json(response)

    }
}

const editar= (req,res ) =>{
    const id =Number(req.params.id)
    const data = req.body
    if(data.name && data.email && data.country && data.phone && data.age){
        const response = updateUser(id,data)
        res.status(201).json({message:"edit user succefully",response})
    }else{
        res.status(400).json({message:"invalid argument"})
    }
}

module.exports ={
    getId,
    getall,
    created,
    remove,
    editar
}