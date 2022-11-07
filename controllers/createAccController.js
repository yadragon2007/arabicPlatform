const Accounts = require("../models/accountsSchema.js");
const bcrypt = require("bcrypt");

const createaccount_createaccount_get = (req, res) => {
  res.render("login", {
    title: "create account",
    alreadyUserName: "",
    SAcademicY: "",
  });
};
const createaccountSelect_createaccount_get = (req, res) => {
  res.render("login", {
    title: "create account",
    alreadyUserName: "",
    SAcademicY: "is-invalid",
  });
};
const createaccountEmail_createaccount_get = (req, res) => {
  res.render("login", {
    title: "create account",
    alreadyUserName: "is-invalid",
    SAcademicY: "",
  });
};
const createaccount_post = (req, res) => {
  const newAccount = new Accounts(req.body);

  if (req.body.userName == "Amr") {
    newAccount.admin = "1";
  } else {
    newAccount.admin = "0";
  }
  newAccount.ban = "0";


  if (req.body.academicYear == "0") {
    res.redirect('/createaccount/select/notSelect/')
  }

  Accounts.findOne({ userName: req.body.userName })
    .then((result) => {
      if (result == null) {
        bcrypt
          .hash(newAccount.password, 10)
          .then((hashed) => {
            newAccount.password = `${hashed}`;
            console.log(hashed);
            newAccount
              .save()
              .then((result) => {
                res.redirect(`/`);
              })
              .catch((err) => {
                console, log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect(`/createaccount/select/notSelect/`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createaccount_createaccount_get,
  createaccountSelect_createaccount_get,
  createaccountEmail_createaccount_get,
  createaccount_post,
};
