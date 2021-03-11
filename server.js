const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { studyrooms } = require('./studyrooms');
//const session = require('express-session');

//tests

// Express initiation function
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(session({
//     'secret':'1234'
// }))


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res,) => {
    //req.session
    res.send("Welcome to the study group page!");
});

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

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost: ${PORT}`);
});