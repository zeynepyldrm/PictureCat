const User = require("../models/User");
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
   // console.log(req.body)
    const { email, password } = req.body; const user = await User.findOne({ email });
    if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
            if (same) {
                res.status(200).redirect("/");
            }
            else {
                //req.flash("error", "Your password is not correct!");
                res.status(400).redirect('/login');
            }
        })
    }
}

exports.register = async (req, res) => {
    await User.create(req.body);
    //alert("success user acount.routing login ...");
    res.redirect("/");
}