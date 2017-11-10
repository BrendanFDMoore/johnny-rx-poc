import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Gamepad from 'components/Gamepad';
import { selectShootyLasersGameState } from 'selectors/shooty';

// import { ledOn, ledOff, ledBlink, ledPulse } from 'actions';

export class Private extends React.PureComponent {
  static propTypes = {
    greenScore: PropTypes.number,
    redScore: PropTypes.number,
    // secondsRemaining: PropTypes.number,
    started: PropTypes.bool,
    // startTime: PropTypes.string,
    target: PropTypes.string,
    // rehydrated: false,
  };

  render() {
    const {
      target,
      started,
      // startTime,
      redScore,
      greenScore,
      // secondsRemaining,
    } = this.props;

    return (
      <div key="Shooty" className="app__shooty app__route">
        <div className="app__container">
          <h2>Shooty Lasers</h2>
          <div>
            <span style={{ fontSize: '36px' }}>Started: {started ? 'Yes - Fire at will!' : 'No - Hold your fire!' }</span>
          </div>
          { /* }
          <div>
            <span>startTime: {startTime}</span>
          </div>
          <div>
            <span>Seconds Remaining: {secondsRemaining}</span>
          </div>
          */ }
          <div>
            <span style={{ fontSize: '54px' }}>Target: {target}</span>
            <div style={{ width: '250px', height: '250px', backgroundColor: target || 'white' }} />
          </div>
          <div>
            <span style={{ fontSize: '54px', color: 'red' }}>RED Score: {redScore}</span>
          </div>
          <div>
            <span style={{ fontSize: '54px', color: 'green' }}>GREEN Score: {greenScore}</span>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  // return {
  //   ...(selectShootyLasersGameState(state)),
  // };
  return state.shooty;
}
/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Private);
