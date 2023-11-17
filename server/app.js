const express = require('express');
const app = express();
const route=require('./userRoute')
const cors = require('cors');

const bodyParser = require('body-parser')
const mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(cors());
const http = require('http');


const URL = "mongodb+srv://naveen:naveen@dashboard.oe5b1ew.mongodb.net/dashboard?retryWrites=true&w=majority";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Error connecting to the database:", err);
});

app.use('/api',route)

app.listen(3001, function() {
  console.log("Running at port 3001");
});