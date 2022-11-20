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



const deleteQu_peofile_get = (req, res) => {
    QuSchema.findByIdAndDelete(req.params.quId,() => {
      
      res.render("profile", {
        title: "profile",
        userData: req.params.userId,
        QuSchemaData: '',
        alert: 1,
      });
    })
}


module.exports = {
  profile_peofile_post,
  deleteQu_peofile_get,
};
