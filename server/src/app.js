const express=require('express');
const app=express();
const cors=require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/error.middleware');
const userRoutes=require('./routes/user.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:`16Kb`}));
app.use(cookieParser());


app.use('/api/v1/users',userRoutes);

app.use(errorHandler);

module.exports=app;