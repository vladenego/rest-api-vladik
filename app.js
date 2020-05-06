const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

const postRoute = require('./routes/posts')
const userRoute = require('./routes/user')

app.use(bodyParser.json())

app.use('/post', postRoute)

app.use('/user', userRoute)

// Connecting to db
  //DEV ED version of code
    // mongoose.connect('mongodb+srv://admin:admin@cluster0-s3bra.gcp.mongodb.net/test?retryWrites=true&w=majority', () => {
    //   console.log("connected to db");
  // })

  // My version of code

    const dbPath = process.env.DB_CONNECTION;
    mongoose.connect(dbPath, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    
    const db = mongoose.connection;
    db.on("error", () => {
        console.log("> error occurred from the database");
    });
    db.once("open", () => {
        console.log("> successfully opened the database");
    });
  



// Start listening the server 
app.listen(3000)
