const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    refreshToken: {
        type: String
    }
})
userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return;
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = async function () {
    return await jwt.sign({ _id: this._id, email: this.email, firstName: this.firstName, lastName: this.lastName }, process.env.ACCESS_TOKEN, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY })
}

userSchema.methods.genarteRefreshToken = async function () {
    return await jwt.sign({ _id: this._id, email: this.email }, process.env.REFRESH_TOKEN, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY })
}
const User = mongoose.model('User', userSchema);
module.exports = User;