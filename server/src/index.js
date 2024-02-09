const app=require('./app');
const env=require('dotenv');
const connectDB = require('./db');

env.config({
    path:'../.env'
})

connectDB().then(app.listen(process.env.PORT || 8080,()=>{
    console.log(`server is running successfuly on the PORT:${process.env.PORT}`);
})).catch((error)=>{
    console.log(`server is not running`);
})

