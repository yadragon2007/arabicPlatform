const experss = require("express");
const router = experss.Router();

router.get("/", (req, res) => {
  res.render('index',{title:'home'})
});


module.exports = router;