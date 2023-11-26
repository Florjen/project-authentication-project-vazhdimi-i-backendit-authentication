const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const {register,login,user,logout,edit,deleteId,editPass} = require("../controllers/userControllers")
//require nga User models schema
const User = require("../models/User")


//multer
const userStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/users')
    },
    filename: function (req, file, cb) {
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const userUpload = multer({ storage: userStorage })


const router = express.Router()
//HOME ROUTE
//http://localhost:50001/api/users


//Regjistro perdoures
//Route //http://localhost:50001/api/users/register
//methodPOST
router.post("/register",userUpload.single("image"),register)

//Identifiko Perdoruesin
//Route //http://localhost:50001/api/users/login
//method POST
router.post("/login",login)

//Dergo te dhenat e perdoruesit ne frontend
//Route //http://localhost:50001/api/users/user
//method GET
router.get("/user",user)

//LogOut User
//Route //http://localhost:50001/api/users/logout
router.get("/logout",logout)
//method GET


//Edit Single user data
//Route //http://localhost:50001/api/users/edit:/id
//method PUT
router.put("/edit/:id",edit)


//DELETE Single user data
//Route //http://localhost:50001/api/users/delete/:id
//method DELETE
router.delete("/delete/:id",deleteId)


//Edit Pass
router.put("/edit/pass/:id",editPass)



module.exports = router