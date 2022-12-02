const experss = require("express");

const Accounts = require("../models/accountsSchema");
const Qu = require("../models/QuSchema");
const Lessons = require("../models/lessonsSchema");
const Quiz = require("../models/QuizSchema");
const cookieParser = require("cookie-parser");

const learn_subjectsVideo_get = (req, res) => {
  if (req.cookies.userData != undefined) {
    Lessons.find().then((lessons) => {
      res.render("subjectsVideo", {
        title: "learn",
        userData: req.cookies.userData,
        lessons: lessons,
      });
    });
  } else {
    res.redirect("login/ / /");
  }
};

const deleteLesson_subjectsVideo_get = (req, res) => {
  Lessons.findByIdAndDelete(req.params.id, (err, then) => {
    res.redirect("/learnning/");
  });
};

const addQuiz_addQuiz_get = (req, res) => {
  if (req.cookies.userData.admin == "1") {
    res.render("createQuiz", {
      title: "Quiz",
      QuizData: req.cookies.Quiz || "",
      alert: 0,
      alertValue: "",
    });
  } else {
    res.redirect("/404");
  }
};

const addQuiz_addQuiz_post = (req, res) => {
  if (req.body.system == "createQuiz") {
    if (req.body.academicYear != 0) {
      Quiz.findOne({ title: req.body.title }, (err, result) => {
        if (result == null) {
          const newQuiz = new Quiz(req.body);
          newQuiz.save((err, result) => {
            res.cookie("Quiz", result, {
              secure: true,
              maxAge: 2592000000,
            });
            res.redirect("/addQuiz/");
          });
        } else {
          res.render("createQuiz", {
            title: "Quiz",
            QuizData: req.cookies.Quiz || "",
            alert: 1,
            alertValue: "this title is alredy used",
          });
        }
      });
    } else {
      res.render("createQuiz", {
        title: "Quiz",
        QuizData: req.cookies.Quiz || "",
        alert: 1,
        alertValue: "select academic Year",
      });
    }
  } else if (req.body.system == "openQuiz") {
    Quiz.findOne({ title: req.body.title }, (err, result) => {
      if (result != null) {
        res.cookie("Quiz", result, {
          secure: true,
          maxAge: 2592000000,
        });
        res.redirect("/addQuiz/");
      } else {
        res.render("createQuiz", {
          title: "Quiz",
          QuizData: "",
          alert: 1,
          alertValue: "this title is undefined",
        });
      }
    });
  } else if (req.body.system == "addQuestion") {
  } else if (req.body.system == "online") {
  } else if (req.body.system == "offline") {
  } else if (req.body.system == "cansel") {
    res.clearCookie("Quiz");
    res.redirect("/addQuiz/");
  } else if (req.body.system == "delete") {
    Quiz.findOneAndDelete(
      { title: req.body.title || req.cookies.Quiz.title },
      (err) => {
        if (err) {
          res.render("createQuiz", {
            title: "Quiz",
            QuizData: req.cookies.Quiz || "",
            alert: 1,
            alertValue: "title is false",
          });
        } else {
          res.clearCookie("Quiz");
          res.redirect("/addQuiz/");
        }
      }
    );
  } else {
    res.render("createQuiz", {
      title: "Quiz",
      QuizData: req.cookies.Quiz || "",
      alert: 1,
      alertValue: "select system type",
    });
  }
};

module.exports = {
  learn_subjectsVideo_get,
  deleteLesson_subjectsVideo_get,
  addQuiz_addQuiz_get,
  addQuiz_addQuiz_post,
};
