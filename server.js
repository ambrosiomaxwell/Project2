const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//Setting up the server to handle passport js 031421
// const passport = require('passport');
// const session = require('express-session');
// const bodyParser = require('body-parser');

//setup for body-parser module 031421
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

//express session middleware setup 031421
// app.use(session({
//     secret: 'W$q4=25*8%v-}UV',
//     resave: true,
//     saveUninitialized: true
// }));

//passport middleware setup 031421
// app.use(passport.initialize());
// app.use(passport.session());

//Existing express setup
const app = express();
const PORT = process.env.PORT || 8080;

//Existing express setup
const db = require('./models');

//Existing express setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Existing express setup
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Existing express setup
app.use(express.static(path.join(__dirname, '/public')));


//Handlebar routes - Existing express setup
app.get('/javascriptroom',(req,res) => res.render('javascript', {layouts: 'main'}));


//new index room - Existing express setup

app.get('/', (req, res) => res.render('index', {layouts: 'main'}));

//New login room - Existing express setup
app.get('/login', (req, res) => res.render('login', {layouts: 'main'}));


// passport authentication route

// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
// });

//Route for apis - Existing express setip

require('./routes/api-routes.js')(app);

//Route added for passport - 031421

//require('./routes/passport-route')(app,passport);

//Route

//Adding note

//current route for testing GET and POST - Existing express setup

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname, './public/javascript.html'));
});


//Syncing sequelize models and then starting our Express app
//Existing express setup

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
