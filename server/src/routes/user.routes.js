const express=require('express');
const { login, register, getCurrentUser, refreshAccessToken, logoutUser } = require('../controllers/user.controller');
const verifyJWT=require('../middlewares/auth.middleware');
const router=express.Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/current-user').get(verifyJWT,getCurrentUser);
router.route('/refresh-token').get(refreshAccessToken);
router.route('/logout').post(verifyJWT,logoutUser);



module.exports=router;