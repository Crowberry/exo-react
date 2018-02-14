import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';

const SettingsMain = ({ getNewUrl, isLoading }) => (
  <UrlInput getNewUrl={getNewUrl} isLoading={isLoading} />
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};


export default SettingsMain;
