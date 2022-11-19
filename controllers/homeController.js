const question = require("../models/QuSchema");
const Accounts = require("../models/accountsSchema.js");

const sendQu_index_post = (req, res) => {
  const newquestion = new question(req.body);

  if (req.body.qu != "") {
    Accounts.findOne({ userName: req.body.userName }, (err, result) => {
      newquestion.AccData = {
        userName:result.userName,
        firstName:result.firstName,
        lastName:result.lastName,
        academicYear:result.academicYear,
      };
      newquestion
        .save()
        .then(() => {
          Accounts.findOne({ userName: req.body.userName }).then((result) => {
            res.render("index", {
              title: "بالعربي الفصيح",
              userData: result,
              password: req.body.password,
              alert: 1,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  } else {
  }
};

module.exports = {
  sendQu_index_post,
};
