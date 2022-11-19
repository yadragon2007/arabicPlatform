const Accounts = require("../models/accountsSchema.js");
const QuSchema = require("../models/QuSchema");

const profile_peofile_post = (req, res) => {
    Accounts.findById(req.body.id, (err, AccountResult) => {
    QuSchema.find().then((QuSchemaResult) => {
      res.render("profile", {
        title: "profile",
        userData: AccountResult,
        QuSchemaData: QuSchemaResult,
        alert: 0,
      });
    });
  });
};

module.exports = {
  profile_peofile_post,
};
