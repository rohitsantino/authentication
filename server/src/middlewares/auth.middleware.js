const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const User = require('../models/user.model');


const verifyJWT = asyncHandler(async (req, res, next) => {
    console.log(req.cookies?.accessToken);
    const incomingAccessToken = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer', "");
    if (!incomingAccessToken) {
        throw new ApiError(401, "Unauthorised request!");
    }
    const decodedToken = await jwt.verify(incomingAccessToken, process.env.ACCESS_TOKEN);
    const user = await User.findById(decodedToken._id);
    if (!user) {
        throw new ApiError(401, "Invalid Access Token");
    }
    req.user=user;


    next();
})

module.exports=verifyJWT;