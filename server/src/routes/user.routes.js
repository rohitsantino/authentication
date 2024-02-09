const express=require('express');
const router=express.Router();

router.route('/login').post(login);
router.route('/signup').post(signup);
