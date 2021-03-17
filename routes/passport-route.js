const LocalStrategy = require('passport-local').Strategy;

module.exports = (app, passport) => {
    app.get('/login', (req, res) => res.render('login', {layouts: 'main'}));
    
    app.post('/login',passport.authenticate('local', {
        failureRedirect:'/login',
        successRedirect:'/',
    }));
    
    passport.use(newLocalStrategy(
        (username,password,done) => {
            if(username==='test@gmail.com' && password ==='1234'){
                return done(null,{username:'test@gmail.com'});
            } else {
                return done(null, false);
            }
        }
    ));

    passport.serializeUser((user,done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username,done) => {
        done(null,{username:username});
    });

    function isLoggedIn(req,res,next){
        if(req.isAuthenticated()){
            return next();
        } else {
            return res.redirect('/login');
        }
    }

};