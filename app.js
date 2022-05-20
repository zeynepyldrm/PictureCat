const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

//template engine 
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});

app.get('/addPhoto',(req,res)=>{
  res.render('addPhoto');
});

app.get('/about',(req,res)=>{
  res.render('about');
})

const port = 3000;

app.listen(port, () => {
  console.log(` server ${port} da çalışıyor ...`);
});
