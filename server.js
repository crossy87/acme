const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const docserver = require('docserver');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(docserver({
  dir: __dirname + '/content',
  url: '/content/'}
));


app.listen(port, () => {
  console.log(docserver.version + ` Listening on port: ${port}`);
});

module.exports = app;
