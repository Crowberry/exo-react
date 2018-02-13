import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';

const SettingsMain = ({ getNewUrl }) => (
  <div className="container">
    <h2>Settings</h2>
    <UrlInput getNewUrl={getNewUrl} />
  </div>
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
};


export default SettingsMain;
