import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Gamepad = ({ buttons }) => {
  return (
    <div className="controller-wrapper">
      <div className="controller">
        <div className="inset-area">
          <div className="nintendo-text"> Nintendo </div>
          <div className="mid-stripe" >
            <div className="stripe stripe1" />
            <div className="stripe stripe2" />
            <div className="stripe stripe3" />
            <div className="stripe stripe4" />
          </div>
          <div className="button-box a-box">
            <div
              className={cx({
                'red-button': true,
                'a-button': true,
                'button-is-pressed': buttons.A.press,
              })}
            />
          </div>
          <div className="button-box b-box">
            <div
              className={cx({
                'red-button': true,
                'b-button': true,
                'button-is-pressed': buttons.B.press,
              })}
            />
          </div>
        </div>
        <div className="fill-tri-top" />
        <div className="fill-tri-bottom" />
        <div className="bottom" />
        <div className="right" />
        <div className="fill-tri-bottom-right" />
        <div className="fill-circle" />
        <div className="middle-buttons">
          <div
            className={cx({
              'button-is-pressed': buttons.Select.press,
              'middle-button': true,
              'select-button': true,
            })}
          />
          <div
            className={cx({
              'button-is-pressed': buttons.Start.press,
              'middle-button': true,
              'start-button': true,
            })}
          />
        </div>
        <div className="d-pad">
          <div
            className={cx({
              'button-is-pressed': buttons.Up.press,
              'd-pad-button': true,
              'up-button': true,
            })}
          >&#8659;</div>
          <div
            className={cx({
              'button-is-pressed': buttons.Left.press,
              'd-pad-button': true,
              'left-button': true,
            })}
          >&#8659;</div>
          <div
            className={cx({
              'button-is-pressed': buttons.Right.press,
              'd-pad-button': true,
              'right-button': true,
            })}
          >&#8659;</div>
          <div
            className={cx({
              'button-is-pressed': buttons.Down.press,
              'd-pad-button': true,
              'down-button': true,
            })}
          >&#8659;</div>
          <div className="middle-part" />
        </div>
      </div>
    </div>
  );
};

Gamepad.propTypes = {
  buttons: PropTypes.object,
};

export default Gamepad;
