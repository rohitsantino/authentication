const express=require('express');
const app=express();
const cors=require('cors');
const errorHandler = require('./middlewares/error.middleware');

app.use(cors({
    origin:"",

}));

app.use(express.json());
app.use(express.urlencoded({extended:true,limit:`16Kb`}));

app.use('/api/v1/user',userRoutes);

app.use(errorHandler);

module.exports=app;