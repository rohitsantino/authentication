const express=require('express');
const { login, register, currentUser } = require('../controllers/user.controller');
const router=express.Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/current-user').get(currentUser);


module.exports=router;