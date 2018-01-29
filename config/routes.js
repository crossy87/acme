const express = require('express');
const router  = express.Router();

const content = require('../controllers/content-controller.js');

router.route('/about-page')
  .get(content.about);

module.exports = router;


// app.get('/about-page',(req, res ) => {
//   res.send('About Page');
// });
//
// app.get('/jobs',(req, res ) => {
//   res.send('Jobs Page');
// });
//
// app.get('/valves',(req, res ) => {
//   res.send('Valves Page');
// });
//
// app.get('*', (req, res) => {
//   res.status(404).send('404!');
// });
