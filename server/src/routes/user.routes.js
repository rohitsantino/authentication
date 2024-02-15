const express=require('express');
const { login, register, currentUser, refreshAccessToken } = require('../controllers/user.controller');
const router=express.Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/current-user').get(currentUser);
router.route('/refresh-token').get(refreshAccessToken);



module.exports=router;