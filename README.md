This project is an initial proof of concept for getting redux actions created in response to real world button press events connected to an Arduino board.

In order to avoid some of the challenges associated with Johnny-Five and serial port access, I wanted to try running it in isolation directly with node, and connect it to the web app indriectly via a websocket.

Running `yarn start` uses `concurrently` to run three commands in parallel for starting the main web app via wepback dev server, a simple express server to manage the websocket connections and the johnny-five scripts that monitor board events and transmit via the socket.

Events from the Arduino board are reported by Johnny Five using a segmented string: `component:pin:event`. For example, pressing a button connected to pin number 2 would produce `button:2:press` (and then `button:2:release` after it is released). After transmission via the socket, there in an `epic` which will `dispatch` these board events as _actions_ to the redux store. Another `epic` listens for these actions and filters them to just `button` components and dispatches press/release actions as appropriate (including the pin number).

Currently, the state is not actually being recorded in the store by any reducer. I merely wanted to get the actions going as a first step.

Built off of [React-Redux-Observables Boilerplate](https://github.com/gilbarbara/react-redux-observables-boilerplate)
