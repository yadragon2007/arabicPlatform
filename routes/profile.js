const experss = require('express');
const router = experss.Router()
const Accounts = require("../models/accountsSchema.js");
const url = require('url')
const profileController = require('../controllers/profileController');


router.get('/profile/', profileController.profile_peofile_get)
router.get('/delete/question/:quId/', profileController.deleteQu_peofile_get)







module.exports = router;