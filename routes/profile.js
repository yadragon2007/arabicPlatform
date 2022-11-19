const experss = require('express');
const router = experss.Router()
const Accounts = require("../models/accountsSchema.js");
const url = require('url')
const profileController = require('../controllers/profileController');


router.post('/profile/', profileController.profile_peofile_post)







module.exports = router;