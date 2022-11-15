const experss = require('express');
const router = experss.Router()
const Accounts = require("../models/accountsSchema.js");
const url = require('url')
const dashboardController = require('../controllers/dashboardController');


router.post('/dashboard/', dashboardController.dashboard_dashboard_post)

router.post('/ban/', dashboardController.ban_dashboard_post)
router.post('/admin/', dashboardController.admin_dashboard_post)








module.exports = router;