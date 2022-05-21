const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo=require('./models/Photo');

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
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//routes
app.get('/', async(req, res) => {
  const photos=await Photo.find({});
  res.render('index',{photos})
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
