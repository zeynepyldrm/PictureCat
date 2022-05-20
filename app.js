const express = require('express');
const path = require('path');

const app = express();

//middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
  /* const photo={
         id:1,
         name:"Photo Name",
         description:" Photo Description"
     }
     res.send(photo);
     */
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3000;

app.listen(port, () => {
  console.log(` server ${port} da çalışıyor ...`);
});
