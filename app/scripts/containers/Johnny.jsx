import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ledOn, ledOff, ledBlink, ledPulse } from 'actions';

export class Private extends React.PureComponent {
  static propTypes = {
    johnny: PropTypes.object.isRequired,
    ledBlinkHandler: PropTypes.func.isRequired,
    ledOffHandler: PropTypes.func.isRequired,
    ledOnHandler: PropTypes.func.isRequired,
    ledPulseHandler: PropTypes.func.isRequired,
  };

  render() {
    const { johnny: { buttons } } = this.props;
    const { ledOnHandler, ledOffHandler, ledBlinkHandler, ledPulseHandler } = this.props;

    return (
      <div key="Johnny" className="app__johnny app__route">
        <div className="app__container">
          <h2>Debug Johnny State</h2>
          <div>
            {
              Object.keys(buttons).map((pin) => (
                <div key={pin}>
                  {`{ pin: ${pin}, press: ${buttons[pin].press}, hold: ${buttons[pin].hold}, holdCount: ${buttons[pin].holdCount}}`}
                </div>
              ))
            }
          </div>
          <h2>Johnny Debug Commands</h2>
          <div>
            <div>
              <span>LED 1 (Pin 11):</span>
              <a
                className="btn btn-sm btn-secondary"
                onClick={() => ledOnHandler(11)}
                role="button"
                tabIndex={0}
              >
                <span>On</span>
              </a>
              <a
                className="btn btn-sm btn-secondary"
                onClick={() => ledOffHandler(11)}
                role="button"
                tabIndex={0}
              >
                <span>Off</span>
              </a>
              <a
                className="btn btn-sm btn-secondary"
                onClick={() => ledBlinkHandler(11, 250)}
                role="button"
                tabIndex={0}
              >
                <span>Blink</span>
              </a>
              <a
                className="btn btn-sm btn-secondary"
                onClick={() => ledPulseHandler(11, 500)}
                role="button"
                tabIndex={0}
              >
                <span>Pulse</span>
              </a>
            </div>
            <div>
              <span>LED 2 (Pin 13):</span>
              <a
                className="btn btn-sm btn-secondary"
                onClick={() => ledOnHandler(13)}
                role="button"
                tabIndex={0}
              >
                <span>On</span>
              </a>
              <a
                className="btn btn-sm btn-secondary"
                onClick={() => ledOffHandler(13)}
                role="button"
                tabIndex={0}
              >
                <span>Off</span>
              </a>
              <a
                className="btn btn-sm btn-secondary"
                onClick={() => ledBlinkHandler(13, 333)}
                role="button"
                tabIndex={0}
              >
                <span>Blink</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { johnny: state.johnny };
}
/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    ledOnHandler: (pin) => dispatch(ledOn(pin)),
    ledOffHandler: (pin) => dispatch(ledOff(pin)),
    ledBlinkHandler: (pin, duration) => dispatch(ledBlink(pin, duration)),
    ledPulseHandler: (pin, duration) => dispatch(ledPulse(pin, duration)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Private);
