const express = require('express');
const http = require('http')
const app = express();
const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

const routes = require('./routes/api-routes.js');
app.use(routes)

server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));