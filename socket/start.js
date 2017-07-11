const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const config = require('./config');

const logger = (msg) => console.log('Socket server says:', msg);

io.on('connection', (socket) => {
  logger('a user connected!');
  socket.emit('message', 'greetings user!');
  socket.on('disconnect', () => {
    logger('user disconnected');
  });
  socket.on('chat message', (msg) => {
    logger('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('johnny event', (msg) => {
    logger('received johnny event: ' + msg);
    io.emit('johnny event', msg);
  });
});

http.listen(config.PORT, () => {
  logger('listening on *:4444');
});