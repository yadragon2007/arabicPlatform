//require
const Accounts = require("../models/accountsSchema.js");
const url = require('url')
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const login_get = (req, res) => {
    res.redirect('/login')
}

const login_index_get = (req, res) => {
    const errType = '';
    res.render('index', { title: 'dragon', refresh: 3600, errType: errType })
}
const userName_login_get = (req, res) => {
    const errType = "User name is false";
    res.render('index', { title: 'dragon', refresh: 3600, errType: errType });
}
const password_login_get = (req, res) => {
    const errType = "password is false";
    res.render('index', { title: 'dragon', refresh: 3600, errType: errType });
}
const homePage_post = (req, res) => {

  

    if (req.body.userData == undefined) {
        Accounts.findOne({ userName: req.body.userName })
            .then((result) => {
                bcrypt.compare(req.body.password, result.password)
                    .then((passwordResult) => {
                        if (passwordResult == true) {
                            if (result.ban == "0") {
                                res.render('homepage', { title: 'dragon', userData: result, refresh: 3600 });
                            } else {
                                res.render('falseUserNamePasswords.ejs', { title: 'ban', content: 'This account is banned', refresh: 3600 });
                            }
                        } else {
                            const errType = "password is false";
                            res.render('index', { title: 'dragon', refresh: 3600, errType: errType });
                        }
                    })
                    .catch((err) => {
                        res.redirect(`/login/false/password`)
                    })
            })
            .catch((err) => {
                res.redirect(`/login/false/userName`)
            });
    } else {
        Accounts.findById(req.body.userData)
            .then((result) => {
                res.render('homepage', { title: 'dragon', userData: result, refresh: 3600 });
            })
            .catch((err) => {
                console.log(err);
            });
    }





}
module.exports = {
    login_get,
    userName_login_get,
    password_login_get,
    login_index_get,
    homePage_post,
}