const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const path = require('path');
const  methodOverride=require('method-override');
const fs = require('fs');


const photoController=require("./controllers/photoController")
const pageController=require("./controllers/pageController")
const authController=require("./controllers/authController")
const app = express();

//connect DB
mongoose.connect('mongodb://localhost/PictureCat-Test-DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


//template engine 
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method',{
  methods:["POST","GET"]
}))

// photo routes
app.get('/',photoController.getAllPhotos);
app.get('/photos/:id',photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put("/photos/:id",photoController.updatePhotos);
app.delete("/photos/:id",photoController.deletePhoto);


//page routes
app.get('/about', pageController.getAboutPage);
app.get('/addPhoto', pageController.getAddPhotoPage);
app.get("/photos/edit/:id",pageController.getPhotoEditPage);
app.get("/register",pageController.getRegisterPage);
app.get("/login", pageController.getLoginPage);

//auth controller
app.post("/register",authController.register);
app.post("/login",authController.login);


const port = 3000;

app.listen(port, () => {
  console.log(` server ${port} da çalışıyor ...`);
});
