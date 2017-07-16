const io = require('socket.io-client');
const five = require('johnny-five');

const config = require('./config');
const socketconfig = require('../socket/config');

const logger = (msg) => console.log('Johnny says:', msg);

const socket = io(socketconfig.ADDRESS);

const board = new five.Board({
  repl: false,
});

/**
 * transformBoardCommandStringToObject
 *
 * @param {string} commandString
 *
 * @returns {Object}
 */
const transformBoardCommandStringToObject = (commandString) => {
  const commandTags = commandString.split(':');
  return {
    component: commandTags[0],
    pin: commandTags[1],
    command: commandTags[2],
    duration: commandTags[3],
  };
};

board.on('ready', () => {
  const buttons = config.buttons.map(b => {

    // Initialize button instances from config
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

  // Initialize LED instances from config
  const leds = {};
  config.leds.map(l => {
    const led = {
      component: new five.Led(l.init),
      commands: l.commands,
    };
    leds[l.init.pin] = led;
    return led;
  });

  socket.on('johnny command', (msg) => {
    logger('received johnny command: ' + msg);
    const cmd = transformBoardCommandStringToObject(msg);
    if (
      cmd.component === 'led'
      && Object.keys(leds).includes(cmd.pin)
      && leds[cmd.pin].commands.includes(cmd.command)
    ) {
      leds[cmd.pin].component.stop(); // Required end previous interval-based command
      leds[cmd.pin].component[cmd.command](cmd.duration ? cmd.duration : null);
    }
  });

  logger('Board ready!');
});
