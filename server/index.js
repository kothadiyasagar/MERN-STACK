const express = require("express");
const fs = require("fs");
const { getgroups, send } = require("process");
const { User, connection } = require("./database/db.js");
const mongodb = require("mongodb");
const router = require("./routes/route.js")
const bodyParser= require("body-parser")
const app = express();
const cors = require("cors")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 app.use(cors())


 app.use("/",router)
app.listen(8080, async () => {
    try {
      await connection;
      console.log("connection to db");
    } catch {
      console.log("failled");
    }
    console.log("server starting");
  });