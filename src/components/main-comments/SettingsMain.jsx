import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';
import UserFilter from './settings/UserFilter';

const SettingsMain = ({
  getNewUrl, isLoading, users, filteredUsers, onFilteredUsersChange,
}) => (
  [
    <UrlInput key="UrlInput" getNewUrl={getNewUrl} isLoading={isLoading} />,
    <UserFilter
      key="UserFilter"
      users={users}
      filteredUsers={filteredUsers}
      onFilteredUsersChange={onFilteredUsersChange}
    />,
  ]
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilteredUsersChange: PropTypes.func.isRequired,
};


export default SettingsMain;
