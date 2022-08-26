const router = require("express").Router()
const http =require("./users.http")


router.route("/users")
       .get(http.getall)
       .post(http.created)


router.route("/users/:id")

          .get(http.getId )
          .put(http.editar)
          .delete(http.remove)

  
  module.exports ={
    router
  }        

