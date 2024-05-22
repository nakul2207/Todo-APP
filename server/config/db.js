const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.DB_URL || 'mongodb+srv://ng2272003:nakul1234@cluster1.wrfbq6n.mongodb.net/TodoAPP';

const dbconnect = ()=>{
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("DB connected!!");
    })
    .catch((error)=>{
        console.log("Error occured");
        console.error(error.message);
    })
};

module.exports = dbconnect;