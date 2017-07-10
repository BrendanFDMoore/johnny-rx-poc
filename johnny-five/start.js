const io = require('socket.io-client');
const five = require('johnny-five');

const logger = (msg) => console.log('Johnny says:', msg);

const socket = io('http://localhost:4444');

const board = new five.Board({
  repl: false,
});

board.on('ready', () => {
  const button = new five.Button({
    pin: 2,
    isPullup: true,
  });
  button.on('press', () => {
    logger('Button Pressed!');
    socket.emit('johnny event', 'button:2:press');
  });
  button.on('release', () => {
    logger('Button Released!');
    socket.emit('johnny event', 'button:2:release');
  });
  logger('Board ready!');
});
