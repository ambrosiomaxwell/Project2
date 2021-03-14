const express = require('express');
// const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const env = require('dotenv').config();
var authRoute = require('./app/routes/auth.js')(app,passport);

const PORT = process.env.PORT || 8080;

const db = require('./app/models');

//For BodyParser
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// For Passport
app.use(session({ 
    secret: 'keyboard cat',
    resave: true, 
    saveUninitialized:true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); 

app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});

const models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

//Handlebar routes
app.get('/javascriptroom',(req,res) => res.render('javascript', {layouts: 'main'}));


//new index room

app.get('/', (req, res) => res.render('index', {layouts: 'main'}));


app.get('/login', (req, res) => res.render('login', {layouts: 'main'}));

// require('./routes/api-routes.js')(app);

//original server screen

//current route for testing GET and POST

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname, './public/javascript.html'));
});
  
app.listen(8080, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});

//Syncing sequelize models and then starting our Express app

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});