require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');
const cors = require('cors');
app.use(express.static('public'));
app.use(express.json());

//cors 



const corsOptions ={
   origin:process.env.Allowed_Clients, 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
const connectDB = require('./config/db');
connectDB();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));




app.listen(process.env.PORT, console.log(`Listening on port ${PORT}.`));

