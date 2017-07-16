import React from 'react';
import PropTypes from 'prop-types';

const Gamepad = () => (
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
          <div className="red-button a-button" />
        </div>
        <div className="button-box b-box">
          <div className="red-button b-button" />
        </div>
      </div>
      <div className="fill-tri-top" />
      <div className="fill-tri-bottom" />
      <div className="bottom" />
      <div className="right" />
      <div className="fill-tri-bottom-right" />
      <div className="fill-circle" />
      <div className="middle-buttons">
        <div className="middle-button select" />
        <div className="middle-button start" />
      </div>
      <div className="d-pad">
        <div className="d-pad-button up-button" >&#8659;</div>
        <div className="d-pad-button left-button" >&#8659;</div>
        <div className="d-pad-button right-button" >&#8659;</div>
        <div className="d-pad-button down-button" >&#8659;</div>
        <div className="middle-part" />
      </div>
    </div>
  </div>
);

Gamepad.propTypes = {
  buttons: PropTypes.object,
};

export default Gamepad;
