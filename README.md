# Johnny Five Redux

## What is this? 

This physical computing project is an initial proof of concept for getting redux actions created in response to real world button press events connected to an Arduino board, and correspondingly issuing commands back to the board starting with redux actions.

## How does it work?

In order to avoid some of the challenges associated with Johnny-Five (J5) and serial port access in the browser, I wanted to try running it in isolation directly with node, and connect it to the web app _indirectly_ via a websocket. The websocket would be the communication bridge between the redux-based web app and the Johnny-Five board controller.

Running `yarn start` uses `concurrently` to run three commands in parallel for starting the main web app via webpack dev server, a simple express server to manage the websocket connections and the Johnny-Five scripts that monitor board events and transmit via the socket.

Events from the Arduino board are reported by Johnny-Five using a segmented string: `component:pin:event`. For example, pressing a button connected to pin number 2 would produce `button:2:press` (and then `button:2:release` after it is released). After transmission via the socket, there in an `epic` which will `dispatch` these board events as _actions_ to the redux store:
```
{
  type: 'JOHNNY_FIVE_BOARD_EVENT',
  payload: {
    eventType: 'button:2:press'
  }
}
```

Another `epic` listens for these actions and filters them to just `button` components and dispatches press/release actions as appropriate (including the pin number):
```
{
  type: 'JOHNNY_FIVE_BUTTON_PRESS',
  payload: {
    pin: '2'
  }
}
```

The reducer in `reducers/johnny.js` uses these action to keep track of the various button states as events are communicated from the board. The state of each button is keyed by the pin number, and looks like this:
```
johnny: {
  buttons: {
    '2': {
      press: false,
      hold: false,
      holdCount: 0
    },
    ...
  }
```

To support issuing commands back to the boards (to control LEDs), we essentially build the same thing in reverse. We have UI buttons connected to dispatch command actions such as `JOHNNY_FIVE_LED_ON` and `JOHNNY_FIVE_LED_OFF`, also with a `pin` in the payload. These actions are ingested by epics like `ledOnCommands`, which then emit an appropriate command string to the websocket using a similar segmented string format: `led:13:on`.

The Johnny-Five controller is listening for these commands on its side of the socket, parses the command string and issues the desired command to the board for the correct pin.

### Why Observables?
Mainly because I had not used them before and wanted to learn. It turns out the model is a good fit for listening to events from an external source like a circuit board or websocket.

## Config
### Websocket server & clients
In `socket/config.js` set the `PROTOCOL`, `HOST` and `PORT` to whatever will work for you. This should work with any remote socket server set up to relay the appropriate messages. Just put in the host/port that J5 and the web app should connect to, and disable the server start in the `package.json` scripts.

### Johnny Five & Arduino
The components and events/commands of interest can be configured in `johnny-five/config.js`. Currently this supports buttons & LEDs only, but should be relatively straightforward to extend for other components supports by Johnny-Five.

#### Buttons

Fill the `buttons` array with all the buttons for which you care to monitor events, using the following object structure:
```
{
  init: { pin: 2, isPullup: true },
  events: ['press', 'release', 'hold'],
}
```

The `init` property will be passed to the Johnny Five `Button()` constructor, and must include a `pin` number corresponding to the digital pin on your Arduino (or other) board. My Arduino Uno supports configuring the digital pins to use an internal 10kOhm pull-up resistor, and the `isPullup` flag allows you to indicate how your button state should be interpretted.

#### LEDs

The `leds` config array uses similar structure, except that `isPullup` is not relevant, and you list out the `commands` to which it should respond:
```
{
  init: { pin: 11 },
  commands: ['on', 'off', 'blink', 'pulse'],
}
```
**Note**: The LED `pulse` command is for a gradual on-off transtions, and is only supported on PWM-enabled pins. On my Aruino Uno board, this corresponds to digital IO pins 3, 5, 6, 9, 10 and 11, the ones marked with a `~`.


## Thanks/Credits

* Inspiration for this project came from attending JP Côté's session at FITC WebUnleashed in 2016. See his examples [on github](https://github.com/cotejp/fitc2016-workshop).
* Web app built on top of the [React-Redux-Observables Boilerplate](https://github.com/gilbarbara/react-redux-observables-boilerplate).
