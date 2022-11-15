const Accounts = require("../models/accountsSchema.js");
const bcrypt = require("bcrypt");
const IP = require('ip');


const createaccount_createaccount_get = (req, res) => {
  res.render("login", {
    title: "create account",
    alreadyUserName: req.params.user,
    SAcademicY: req.params.select,
    FUserN:'',
    FPassword:'',
    ban:0,
  });
};

const createaccount_post = (req, res) => {
  const newAccount = new Accounts(req.body);

  if (req.body.userName == "fluentArabic") {
    newAccount.admin = "1";
  } else {
    newAccount.admin = "0";
  }
  newAccount.ban = "0";
  
  newAccount.IP = IP.address();

  Accounts.findOne({ userName: req.body.userName })
    .then((result) => {
      if (req.body.userName == 'fluentArabic' || newAccount.academicYear != "0" ) {
        if (result == null) {
          bcrypt
            .hash(newAccount.password, 10)
            .then((hashed) => {
              newAccount.password = `${hashed}`;
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
          res.redirect('/createaccount/is-invalid/ ')
        }
      } else {
        res.redirect('/createaccount/ /is-invalid')
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
