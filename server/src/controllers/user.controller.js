const asyncHandler = require("../utils/asyncHandler");
const User = require('../models/user.model');
const { OPTIONS } = require("../constants");
const ApiError = require('../utils/ApiError');
const jwt=require('jsonwebtoken');

const generateAccessAndRefershToken = async (userID) => {
    const user = await User.findById(userID);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.genarteRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken }
}

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if ([email, password].some(field => !field.trim())) {
        throw new ApiError(404, 'All fields are required');
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        throw new ApiError(400, "No such user exists!");
    }
    const isPasswordMatching = await existingUser.isPasswordCorrect(password);
    console.log(isPasswordMatching);
    if (!isPasswordMatching) {
        throw new ApiError(400, "Password does not match!")
    }
    const loggedInUser = await User.findById(existingUser._id).select("-password -refreshToken");
    const { accessToken, refreshToken } = await generateAccessAndRefershToken(existingUser._id);
    res.status(200).cookie("accessToken", accessToken, OPTIONS).cookie("refreshToken", refreshToken, OPTIONS).json(loggedInUser);
});

const register = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if ([firstName, lastName, email, password].some(field => !field.trim())) {
        throw new ApiError(404, 'All fields are required');
    }
    console.log(firstName, lastName, email, password, "check");
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
        throw new ApiError(409, "User already exists! Login Please.")
    }
    const user = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    })
    const { accessToken, refreshToken } = await generateAccessAndRefershToken(user._id);
    console.log(refreshToken);
    const createdUser = await User.findById(user._id).select("-password ");
    console.log(createdUser);
    res.status(200).cookie("accessToken", accessToken, OPTIONS).cookie("refreshToken", refreshToken, OPTIONS).json(createdUser);
});

const getCurrentUser = asyncHandler(async (req, res) => {
    const { user } = req;
    res.status(200).json(user);
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies?.refreshToken || req.body.refreshToken;
    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken=await jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN);
    const user=await User.findById(decodedToken._id);
    if(!user){
        throw new ApiError(401,"Invalid User");
    }
    const{refreshToken,accessToken}=await generateAccessAndRefershToken(user._id);
    res.status(200).cookie("accessToken",accessToken).cookie("refreshToken",refreshToken).json({refreshToken,accessToken});
})

module.exports = { login, register, getCurrentUser, refreshAccessToken };
