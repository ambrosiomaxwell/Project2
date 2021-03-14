var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
 
 
  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/dashboard',

      failureRedirect: '/signup'
    }

  ));


  app.get('/dashboard', isLoggedIn, authController.dashboard);

  app.get('/logout', authController.logout);

  app.post('/signin', passport.authenticate('local-signin', {
      successRedirect: '/dashboard',

      failureRedirect: '/signin'
    }

  ));


  function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

      return next();

    res.redirect('/signin');

  }

}

// const jwt = require('express-jwt');

// const getTokenFromHeaders = (req) => {
//   const { headers: { authorization } } = req;

//   if(authorization && authorization.split(' ')[0] === 'Token') {
//     return authorization.split(' ')[1];
//   }
//   return null;
// };

// const auth = {
//   required: jwt({
//     secret: 'secret',
//     userProperty: 'payload',
//     getToken: getTokenFromHeaders,
//   }),
//   optional: jwt({
//     secret: 'secret',
//     userProperty: 'payload',
//     getToken: getTokenFromHeaders,
//     credentialsRequired: false,
//   }),
// };

// module.exports = auth;