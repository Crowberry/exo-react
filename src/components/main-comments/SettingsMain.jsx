import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';
import Graph from './settings/Graph';
import UserFilter from './settings/UserFilter';

const SettingsMain = ({
  getNewUrl, isLoading, users, filteredUsers, filteredComments, issue, onFilteredUsersChange,
}) => (

  [
    <UrlInput
      key="UrlInput"
      getNewUrl={getNewUrl}
      isLoading={isLoading}
    />,
    <UserFilter
      key="UserFilter"
      users={users}
      filteredUsers={filteredUsers}
      onFilteredUsersChange={onFilteredUsersChange}
    />,
    <Graph
      key="Graph"
      issue={issue}
      filteredComments={filteredComments}
      filteredUsers={filteredUsers}
      users={users}
      // dataGraph={dataGraph}
    />,
  ]
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilteredUsersChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default SettingsMain;
