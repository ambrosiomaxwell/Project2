const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./model');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/api-routes.js')(app);

//Updating port for sequelize

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
