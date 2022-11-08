const Accounts = require("../models/accountsSchema.js");
const bcrypt = require("bcrypt");

const createaccount_createaccount_get = (req, res) => {
  res.render("login", {
    title: "create account",
    alreadyUserName: "",
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

  Accounts.findOne({ userName: req.body.userName })
    .then((result) => {
      if (newAccount.academicYear != "0") {
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
          res.render("login", {
            title: "create account",
            alreadyUserName: "is-invalid",
            SAcademicY: "",
          });
        }
      } else {
        res.render("login", {
          title: "create account",
          alreadyUserName: "",
          SAcademicY: "",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createaccount_createaccount_get,
  createaccount_post,
};
