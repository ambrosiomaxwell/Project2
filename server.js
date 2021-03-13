const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '/public')));

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


//Syncing sequelize models and then starting our Express app

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});

// app.use(express.static('public'));

// require('./routes/api-routes.js')(app);

// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));