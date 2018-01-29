const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/template.html'));
});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
