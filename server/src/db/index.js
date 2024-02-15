const mongoose=require('mongoose');
const {DB_NAME}=require('../constants');

const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("connected successfully to database");
    } catch (error) {
        console.log(error);
    }
};

module.exports=connectDB;
