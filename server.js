const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//tests

// Express initiation function
const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '/public')));

//new javascriptroom

app.get('/javascriptroom',(req,res) => res.render('javascript', {layouts: 'main'}));

//new index room

app.get('/', (req, res) => res.render('index', {layouts: 'main'}));



//original server screen

// app.get('/', (req,res,) => {
//     //req.session
//     res.send("Welcome to the study group page!");
// });

//removing html route for handlebars

// app.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// //removing route for handlebars

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname, './public/javascript.html'));
});


//Syncing sequelize models and then starting our Express app

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});

// app.listen(PORT, () => {
//     console.log(`Server listening on: http://localhost: ${PORT}`);
// });