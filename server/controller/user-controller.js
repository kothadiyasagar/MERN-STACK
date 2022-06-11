const { User, connection } = require("../database/db.js");
  const addUser = async(req, res)=>{
    const user = req.body
    const  newUser = new User(user)
    try{
    await newUser.save()
    res.status(201).json(newUser)
    } catch(error){
        res.status(409).json(error) 
    }
}

module.exports =addUser