const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);


app.use(express.static(path.join(__dirname, 'public')));

http.listen(3300 , () => {
  console.log('Server connected at port 3300');
});
