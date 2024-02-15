const asyncHandler = require("../utils/asyncHandler");
const User = require('../models/user.model');
const { OPTIONS } = require("../constants");
const ApiError = require('../utils/ApiError');

const generateAccessAndRefershToken = async (userID) => {
    const user = await User.findById(userID);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.genarteRefreshToken();
    user.refreshToken=refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken }
}

const login = asyncHandler(async (req, res) => { });

const register = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName,lastName,email,password,"check");
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

module.exports = { login, register };
