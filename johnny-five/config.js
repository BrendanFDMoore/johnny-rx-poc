/**
 * Configuration for Johnny-Five
 * @module johnny-config
 */

const buttons = [
  {
    init: { pin: 2, isPullup: true },
    events: ['press', 'release', 'hold'],
  },
  {
    init: { pin: 3, isPullup: true },
    events: ['press', 'release', 'hold'],
  },
  {
    init: { pin: 4, isPullup: true },
    events: ['press', 'release', 'hold'],
  },
  {
    init: { pin: 5, isPullup: true },
    events: ['press', 'release', 'hold'],
  },
  {
    init: { pin: 6, isPullup: true },
    events: ['press', 'release', 'hold'],
  },
  {
    init: { pin: 7, isPullup: true },
    events: ['press', 'release', 'hold'],
  },
  {
    init: { pin: 8, isPullup: true },
    events: ['press', 'release', 'hold'],
  },
  {
    init: { pin: 9, isPullup: true },
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
