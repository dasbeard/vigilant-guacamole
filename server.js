// =========================================================================
// ============================== Require ==================================
// =========================================================================
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('colors');


// =========================================================================
// ============================== Setup ====================================
// =========================================================================
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(express.static(path.join('./bower_components')));


// =========================================================================
// ============================== Database =================================
// =========================================================================
require('./server/config/mongoose.js');


// =========================================================================
// ============================== Routes ===================================
// =========================================================================
require('./server/config/routes.js')(app);


// =========================================================================
// ========================= Server Listen =================================
// =========================================================================
app.listen(9000, function(){
  console.log('Listening on port 9000'.cyan);
})