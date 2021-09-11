const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const DefaultData = require('./seeder')



dotenv.config();
const app = express();

// Middleware

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());



app.get("/", (req, res) => {
  res.send("server running!");
});


// Bring routes

const news = require('./routes/route')


app.use('/',news);


// Connect to Database
connectDB();

DefaultData();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () =>
  console.log(
    `Server is runing in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
      .bold
  )
);