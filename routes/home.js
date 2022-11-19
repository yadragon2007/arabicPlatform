const experss = require("express");
const router = experss.Router();

const homeController = require('../controllers/homeController');


router.get("/", (req, res) => {
  res.render("index", {title: "home", userData:'' ,alert:'0'});
});

router.post("/send/question/", homeController.sendQu_index_post)

module.exports = router;
