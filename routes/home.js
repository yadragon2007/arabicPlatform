const experss = require("express");
const router = experss.Router();
const cookieParser = require('cookie-parser')


const homeController = require('../controllers/homeController');
const Accounts = require("../models/accountsSchema");


router.get("/", (req, res) => {
  if (req.cookies.userData != undefined) {
    res.render("index", {title: "home", userData:req.cookies.userData,password:req.cookies.password ,alert:'0'});
  }else{
    res.redirect('login/ / /')
  }
  
});

router.post("/send/question/", homeController.sendQu_index_post)

module.exports = router;
