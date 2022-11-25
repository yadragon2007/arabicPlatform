const experss = require("express");

const Lessons = require("../models/lessonsSchema");
const cookieParser = require("cookie-parser");

const learn_subjectsVideo_get = (req, res) => {
  if (req.cookies.userData != undefined) {
    Lessons.find().then((lessons) => {
      res.render("subjectsVideo", {
        title: "learn",
        userData: req.cookies.userData,
        lessons:lessons,
      });
    });
  } else {
    res.redirect("login/ / /");
  }
};
const deleteLesson_subjectsVideo_get = (req, res) => {
  Lessons.findByIdAndDelete(req.params.id,(err,then) => {
    res.redirect('/learnning/')
  })
}
module.exports = {
  learn_subjectsVideo_get,
  deleteLesson_subjectsVideo_get,
};
