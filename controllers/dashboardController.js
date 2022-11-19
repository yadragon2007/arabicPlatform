const Accounts = require("../models/accountsSchema.js");
const QuSchema = require("../models/QuSchema");
const IP = require("ip");
const { findByIdAndDelete } = require("../models/accountsSchema.js");

const dashboard_dashboard_post = (req, res) => {
  Accounts.find()
    .then((AccountsResult) => {
      QuSchema.find()
        .then((QuSchemaResult) => {
          res.render("dashbord", {
            title: "dash board",
            userData: req.body.userData,
            AccountsData: AccountsResult,
            QuSchemaData: QuSchemaResult,
            alert: 0,
          });
        })
        .catch((err) => {
          console.log(err);
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
          Accounts.find()
            .then((AccountsResult) => {
              QuSchema.find().then((QuSchemaResult) => {
                res.render("dashbord", {
                  title: "dash board",
                  userData: req.body.userData,
                  AccountsData: AccountsResult,
                  QuSchemaData: QuSchemaResult,
                  alert: 1,
                });
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      } else {
        Accounts.findByIdAndUpdate(req.body.id, { ban: "0" }).then((result) => {
          Accounts.find()
            .then((AccountsResult) => {
              QuSchema.find().then((QuSchemaResult) => {
                res.render("dashbord", {
                  title: "dash board",
                  userData: req.body.userData,
                  AccountsData: AccountsResult,
                  QuSchemaData: QuSchemaResult,
                  alert: 1,
                });
              });
            })
            .catch((err) => {
              console.log(err);
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
              .then((AccountsResult) => {
                QuSchema.find().then((QuSchemaResult) => {
                  res.render("dashbord", {
                    title: "dash board",
                    userData: req.body.userData,
                    AccountsData: AccountsResult,
                    QuSchemaData: QuSchemaResult,
                    alert: 1,
                  });
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
              .then((AccountsResult) => {
                QuSchema.find().then((QuSchemaResult) => {
                  res.render("dashbord", {
                    title: "dash board",
                    userData: req.body.userData,
                    AccountsData: AccountsResult,
                    QuSchemaData: QuSchemaResult,
                    alert: 1,
                  });
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

const reply_dashboard_post = (req, res) => {
  const data = req.body;
  QuSchema.find().then((QuSchemaResult) => {
    QuSchema.findByIdAndUpdate(
      QuSchemaResult[data.id].id,
      { reply: data.reply ,answered:'1'},
      (err, result) => {
          Accounts.find().then((AccountsResult) => {
            res.render("dashbord", {
              title: "dash board",
              userData: req.body.userData,
              AccountsData: AccountsResult,
              QuSchemaData: QuSchemaResult,
              alert: 1,
            });
          });
      }
    );
  });
};

module.exports = {
  dashboard_dashboard_post,
  ban_dashboard_post,
  admin_dashboard_post,
  reply_dashboard_post,
};
