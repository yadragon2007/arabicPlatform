const experss = require('express');
const router = experss.Router()
const Accounts = require("../models/accountsSchema.js");
const url = require('url')
const ceratAccController = require("../controllers/createAccController");










router.get('/createaccount',ceratAccController.createaccount_createaccount_get);
router.post('/createaccount/create/',ceratAccController.createaccount_post);

module.exports = router;