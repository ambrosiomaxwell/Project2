const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/api-routes.js')(app);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));