const mongoose=require('mongoose');
const {DB_NAME}=require('../constants');

const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    } catch (error) {
        console.log("failed to connect to database");
    }
};

module.exports=connectDB;
