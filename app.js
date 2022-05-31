const express = require('express');
const bcrypt=require('bcrypt');
const mongoose = require('mongoose');
const fileUpload=require('express-fileupload');
const ejs = require('ejs');
const path = require('path');
const Photo=require('./models/Photo');
const User=require('./models/User');

const app = express();
var flash = require('connect-flash');
//connect DB
mongoose.connect('mongodb://localhost/PictureCat-Test-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//template engine 
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());


//routes
app.get('/', async(req, res) => {
  const photos=await Photo.find({});
  res.render('index',{photos})
});

app.get("/register",(req,res)=>{
  res.render("register");
});

app.post("/register",async(req,res)=>{
  //console.log(req.body);

  await User.create(req.body);
  //alert("success user acount.routing login ...");
  res.redirect("/");
});
app.get("/login",(req,res)=>{
  res.render("login");
});

app.post("/login",async(req,res)=>{
  //console.log(req.body)
  const { email, password } = req.body; const user = await User.findOne({ email });
   if (user) 
   { 
     bcrypt.compare(password, user.password, (err, same) =>{ 
       if (same){
          res.status(200).redirect("/");
       }
       else {
         //req.flash("error", "Your password is not correct!");
          res.status(400).redirect('/login');
        }
      })
   }
});


app.get('/addPhoto',(req,res)=>{
  res.render('addPhoto');
});

app.post('/addPhoto',async(req,res)=>{
  //console.log(req.body);
  await Photo.create(req.body);
  res.redirect("/");
});
app.get('/about',(req,res)=>{
  res.render('about');
});


app.get('/photos/:id',async(req,res)=>{
  const photo=await Photo.findById(req.params.id);
  res.render('photo',{photo})
});

const port = 3000;

app.listen(port, () => {
  console.log(` server ${port} da çalışıyor ...`);
});
