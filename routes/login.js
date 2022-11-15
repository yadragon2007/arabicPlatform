const experss = require('express');
const router = experss.Router()
const Accounts = require("../models/accountsSchema.js");
const url = require('url')
const loginController = require('../controllers/loginControllre');


router.get('/login/:uerName/:password/', loginController.login_index_get)
router.get('/login/ban/', loginController.ban_login_get)
router.post('/', loginController.homePage_post)







module.exports = router;