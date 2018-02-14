import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';
import UserFilter from './settings/UserFilter';

const SettingsMain = ({
  getNewUrl, isLoading,
}) => (
  [
    <UrlInput key="UrlInput" getNewUrl={getNewUrl} isLoading={isLoading} />,
    <UserFilter
      key="UserFilter"
      // checkUser={checkUser}
    />,
  ]
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};


export default SettingsMain;
