const experss = require('express');
const router = experss.Router()
const Accounts = require("../models/accountsSchema.js");
const url = require('url')
const profileController = require('../controllers/profileController');


router.post('/profile/', profileController.profile_peofile_post)
router.get('/delete/question/:quId/:userId', profileController.deleteQu_peofile_get)







module.exports = router;