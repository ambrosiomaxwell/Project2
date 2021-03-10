const db = require('../model');
const express = require('express');
const app = express()
const router = express.Router();
const http = require('http')
const server = http.createServer(app);
const socketio = require('socket.io')
const io = socketio(server)

module.exports = function (app) {


  router.get('/',(req,res)=>{
    res.sendFile(__dirname + '../views/index.html')
  })

  io.on('connection', (socket) => {
    console.log('a user connected');

   // io.on('disconnect', () => {
     // console.log('user disconnected')});

      //socket.emit('message', 'hi')
      //braodsvst when a user connects
      //socket.broadcast.emit('message','user has joined the chat' )
  });
  /*
  http.listen(3000,() => {
    console.log('listening on *:3000')
  })
  


  app.get('/api/musicSelection', (req, res) => {
      
  });

  app.post('/api/musicSelection', (req, res) => {    

  });

  app.delete('/api/musicSelection/:id', (req, res) => {

  });

  app.put('/api/musicSelection', (req, res) {

  });*/
}