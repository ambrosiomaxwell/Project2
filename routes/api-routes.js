const db = require('../models');

//api routes
module.exports = (app) => {
  app.get('/api/names', (req, res) => {
      db.Names.findAll({}).then((Names) => res.json(Names));  
  });

  app.post('api/names', (req, res) => {
    db.Names.create({
        name: req.body.name,
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