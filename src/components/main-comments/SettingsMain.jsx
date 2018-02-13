import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';

const SettingsMain = ({ callBackFromParent }) => (
  <div className="container">
    <h2>Settings</h2>
    <UrlInput callBackFromParent={callBackFromParent} />
  </div>
);

SettingsMain.propTypes = {
  callBackFromParent: PropTypes.func.isRequired,
};


export default SettingsMain;
