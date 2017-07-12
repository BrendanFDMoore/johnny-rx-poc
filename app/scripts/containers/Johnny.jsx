import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Private extends React.PureComponent {
  static propTypes = {
    johnny: PropTypes.object.isRequired,
  };

  render() {
    const { johnny: { buttons } } = this.props;

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
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { johnny: state.johnny };
}

export default connect(mapStateToProps)(Private);
