const {Router}=require("express")
 const addUser=require("../controller/user-controller")

const router = Router()


router.post("/add",addUser)

module.exports =router