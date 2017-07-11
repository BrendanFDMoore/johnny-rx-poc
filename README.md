# Johnny Five Redux

This physical computing project is an initial proof of concept for getting redux actions created in response to real world button press events connected to an Arduino board.

In order to avoid some of the challenges associated with Johnny-Five (J5) and serial port access, I wanted to try running it in isolation directly with node, and connect it to the web app indirectly via a websocket.

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

Currently, the state is not actually being recorded in the store by any reducer. I merely wanted to get the actions going as a first step.

### Why Observables?
Mainly because I had not used them before and wanted to learn. It turns out the model is a good fit for listening to events from an external source like a circuit board or websocket.

## Config
### Websocket server & clients
In `socket/config.js` set the `PROTOCOL`, `HOST` and `PORT` to whatever will work for you. This should work with any remote socket server set up to relay the appropriate messages. Just put in the host/port that J5 and the web app should connect to, and disable the server start in the `package.json` scripts.

### Johnny Five & Arduino
The components and events of interest can be configured in `johnny-five/config.js`. Currently supports only buttons, but support is planned for LEDs also. Fill the `buttons` array with all the buttons for which you care to monitor events, using the following object structure:
```
{
  init: { pin: 2, isPullup: true },
  events: ['press', 'release', 'hold'],
}
```
The `init` property will be passed to the Johnny Five `Button()` constructor, and must include a `pin` number, corresponding to the digital pin on your Arduino (or other) board. My Arduino Uno supports configuring the digital pins to use an internal 10kOhm pull-up resistor, and the `isPullup` flag allows you to indicate how your button state should be interpretted.

## Thanks/Credits

* Inspiration for this project came from attending JP Côté's session at FITC WebUnleashed in 2016. See his examples [on github](https://github.com/cotejp/fitc2016-workshop).
* This was built on top of the [React-Redux-Observables Boilerplate](https://github.com/gilbarbara/react-redux-observables-boilerplate).
