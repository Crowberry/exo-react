import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';

const SettingsMain = ({ getNewUrl, isLoading }) => (
  <div className="container">
    <UrlInput getNewUrl={getNewUrl} isLoading={isLoading} />
  </div>
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};


export default SettingsMain;
