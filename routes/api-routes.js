const db = require('../models');

//api routes
module.exports = (app) => {
  app.get('/api/all', (req, res) => {
      db.Names.findAll({}).then((dbNames) => res.json(dbNames));  
  });

  app.post('/api/new', (req, res) => {
    console.log(req.body);
    db.Names.create({
        name: req.body.name,
        email: req.body.email,
    })
    .then((dbNames) => res.json(dbNames))
    .catch((err) => res.json(err)); 
  });

//   app.post('/api/musicSelection', (req, res) => {    

//   });

//   app.delete('/api/musicSelection/:id', (req, res) => {

//   });

//   app.put('/api/musicSelection', (req, res) {

//   });
};