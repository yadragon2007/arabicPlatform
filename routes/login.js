const experss = require('express');
const router = experss.Router()
const Accounts = require("../models/accountsSchema.js");
const url = require('url')
const loginController = require('../controllers/loginControllre');


router.get('/', loginController.login_get)
router.get('/login/false/userName', loginController.userName_login_get)
router.get('/login/false/password', loginController.password_login_get)
router.get('/login', loginController.login_index_get)
router.post('/home', loginController.homePage_post)







module.exports = router;