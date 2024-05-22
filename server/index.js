
const express = require('express');
const app = express();
const  todoRoutes = require('./routes/todos')
const dbconnect = require('./config/db')
const cors = require('cors')

require('dotenv').config();
//env is not working

const PORT = process.env.PORT || 4000;


//body-parser
app.use(express.json());
app.use(cors());
app.use("/api/v1",todoRoutes);
dbconnect();

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
    console.log("App succesfully connected!!");
});

//default route

app.get('/',(req,res)=>{
    res.send(`<h1>This is the homepage</h1>`);
})