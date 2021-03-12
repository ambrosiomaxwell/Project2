const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { studyrooms } = require('./studyrooms');
//const session = require('express-session');

//tests

// Express initiation function
const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(session({
//     'secret':'1234'
// }))


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//original server screen

// app.get('/', (req,res,) => {
//     //req.session
//     res.send("Welcome to the study group page!");
// });

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname, './public/javascript.html'));
});


app.get('/studyrooms/:name',(req, res) => {
    for (let i=0; i < studyrooms.length; i++){
        if (studyrooms[i].name === req.params.name){
            return res.render('studyroom', studyrooms[i]);
        }
    }
})

app.get('/studyrooms', (req, res) => res.render('sdy', {sdy: studyrooms}));

//new javascriptroom

app.get('/javascriptroom',(req,res) => res.render('javascript', {layouts: 'main'}));

//new index room

app.get('/', (req, res) => res.render('index', {layouts: 'main'}));



//Syncing sequelize models and then starting our Express app

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});

// app.listen(PORT, () => {
//     console.log(`Server listening on: http://localhost: ${PORT}`);
// });