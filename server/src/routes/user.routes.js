const express=require('express');
const { login, register, getCurrentUser, refreshAccessToken, logoutUser, updatePassword ,greet} = require('../controllers/user.controller');
const verifyJWT=require('../middlewares/auth.middleware');
const router=express.Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/current-user').get(verifyJWT,getCurrentUser);
router.route('/refresh-token').get(refreshAccessToken);
router.route('/logout').post(verifyJWT,logoutUser);
router.route('/update-password').post(verifyJWT,updatePassword);
router.route('/').get(greet)




module.exports=router;