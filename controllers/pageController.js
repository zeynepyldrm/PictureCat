const Photo = require("../models/Photo");

exports.getAboutPage = (req, res) => {
    res.render('about');
}

exports.getAddPhotoPage = (req, res) => {
    res.render('addPhoto');
}

exports.getPhotoEditPage = async (req, res) => {
    const photo = await Photo.findOne({ _id: req.params.id });
    res.render("edit", { photo })
}

exports.getRegisterPage = (req, res) => {
    res.render("register");
}
exports.getLoginPage = (req, res) => {
    res.render("login");
}