const db = require('../models');

//api routes
module.exports = (app) => {
  app.get('/api/all', (req, res) => {
      db.Names.findAll({}).then((dbNames) => res.json(dbNames));  
  });

  app.post('api/names', (req, res) => {
    db.Names.create({
        text: req.body.text,
        email: req.body.email,
    })
    .then((dbName) => res.json(dbName))
    .catch((err) => res.json(err)); 
  });

//   app.post('/api/musicSelection', (req, res) => {    

//   });

//   app.delete('/api/musicSelection/:id', (req, res) => {

//   });

//   app.put('/api/musicSelection', (req, res) {

//   });
};