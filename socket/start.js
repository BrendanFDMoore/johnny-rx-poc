const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const config = require('./config');

const logger = (msg) => console.log('Socket server says:', msg);

io.on('connection', (socket) => {
  logger('a user connected!');
  socket.emit('message', 'greetings user!');

  // Listen for disconnections
  socket.on('disconnect', () => {
    logger('user disconnected');
  });

  // Listen for events from board to send to app
  socket.on('johnny event', (msg) => {
    logger('received johnny event: ' + msg);
    io.emit('johnny event', msg);
  });

  // Listen for commands from app to send to board
  socket.on('johnny command', (msg) => {
    logger('received johnny command: ' + msg);
    io.emit('johnny command', msg);
  });
});

http.listen(config.PORT, () => {
  logger('listening on *:4444');
});
