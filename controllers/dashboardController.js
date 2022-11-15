const Accounts = require("../models/accountsSchema.js");
const ban = require("../models/banSchema");
const IP = require("ip");
const { findByIdAndDelete } = require("../models/accountsSchema.js");

const dashboard_dashboard_post = (req, res) => {
  Accounts.find()
    .then((rseult) => {
      res.render("dashbord", {
        title: "dash board",
        userData: req.body.userData,
        AccountsData: rseult,
        alert: 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const ban_dashboard_post = (req, res) => {
  const newban = new ban();

  Accounts.findById(req.body.id)
    .then((result) => {
      if (result.ban == "0") {
        Accounts.findByIdAndUpdate(req.body.id, { ban: "1" }).then((result) => {
          newban.IP = result.IP;
          newban
            .save()
            .then(() => {
              Accounts.find()
                .then((result) => {
                  res.render("dashbord", {
                    title: "dash board",
                    userData: req.body.userData,
                    AccountsData: result,
                    alert: 1,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      } else {
        Accounts.findByIdAndUpdate(req.body.id, { ban: "0" }).then((result) => {
          findByIdAndDelete(req.body.id).then(() => {
            Accounts.find()
              .then((result) => {
                res.render("dashbord", {
                  title: "dash board",
                  userData: req.body.userData,
                  AccountsData: result,
                  alert: 1,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const admin_dashboard_post = (req, res) => {
  Accounts.findById(req.body.id)
    .then((result) => {
      if (result.admin == "0") {
        Accounts.findByIdAndUpdate(req.body.id, { admin: "1" }).then(
          (result) => {
            Accounts.find()
              .then((result) => {
                res.render("dashbord", {
                  title: "dash board",
                  userData: req.body.userData,
                  AccountsData: result,
                  alert: 1,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        );
      } else {
        Accounts.findByIdAndUpdate(req.body.id, { admin: "0" }).then(
          (result) => {
            Accounts.find()
              .then((result) => {
                res.render("dashbord", {
                  title: "dash board",
                  userData: req.body.userData,
                  AccountsData: result,
                  alert: 1,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  dashboard_dashboard_post,
  ban_dashboard_post,
  admin_dashboard_post,
};
