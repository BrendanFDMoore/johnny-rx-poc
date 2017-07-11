const io = require('socket.io-client');
const five = require('johnny-five');

const config = require('./config');
const socketconfig = require('../socket/config');

const logger = (msg) => console.log('Johnny says:', msg);

const socket = io(socketconfig.ADDRESS);

const board = new five.Board({
  repl: false,
});

board.on('ready', () => {
  const buttons = config.buttons.map(b => {
    const button = {};
    button.component = new five.Button(b.init);
    button.events = b.events.map(eventName => {
      return button.component.on(eventName,
        () => {
          socket.emit('johnny event', ['button', `${b.init.pin}`, eventName].join(':'));
        }
      );
    });
    return button;
  });

  logger('Board ready!');
});
