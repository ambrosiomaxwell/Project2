var crypto = require('crypto');
var mysql = require('mysql');
var session = require("express-session");
var MySQLStore = require('express-mysql-session')(session);
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const cors = require('cors');
// // const mongoose = require('mongoose');
// const errorHandler = require('errorhandler');

// // mongoose.promise = global.Promise;

// const isProduction = process.env.NODE_ENV === 'production';

// const app = express();

// app.use(cors());
// app.use(require('morgan')('dev'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// if(!isProduction) {
//   app.use(errorHandler());
// }

// // mongoose.connect('mongodb://localhost/passport-tutorial');
// // mongoose.set('debug', true);

// require('./models/Users');
// require('./config/passport');
// app.use(require('./routes'));

// if(!isProduction) {
//   app.use((err, req, res) => {
//     res.status(err.status || 500);

//     res.json({
//       errors: {
//         message: err.message,
//         error: err,
//       },
//     });
//   });
// }

// app.use((err, req, res) => {
//   res.status(err.status || 500);

//   res.json({
//     errors: {
//       message: err.message,
//       error: {},
//     },
//   });
// });

// app.listen(8000, () => console.log('Server running on http://localhost:8000/'));
