/**
 * Configuration for Johnny-Five
 * @module johnny-config
 */

const buttons = [
  {
    init: { pin: 2, isPullup: true },
    events: ['press', 'release'],
  },
  {
    init: { pin: 3, isPullup: true },
    events: ['press', 'release', 'hold'],
  },
];

// LEDs not yet supported
const leds = [];

const config = {
  buttons,
  leds,
};

module.exports = config;
