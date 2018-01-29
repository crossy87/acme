const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
// const path = require('path');
const docserver = require('docserver');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(docserver({
  dir: __dirname + '/docs',
  url: '/docs/'}
));

// app.use(docserver({
//   dir: __dirname + '/docs/jobs',
//   url: '/jobs'}
// ));
//
// app.use(docserver({
//   dir: __dirname + '/docs/valves',
//   url: '/valves'}
// ));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/template.html'));
// });



app.listen(port, () => {
  console.log(docserver.version + ` Listening on port: ${port}`);
});
