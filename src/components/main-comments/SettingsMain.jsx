import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';
import Graph from './settings/Graph';
import UserFilter from './settings/UserFilter';

const SettingsMain = ({
  getNewUrl, isLoading, users, filteredUsers, onFilteredUsersChange, dataGraph,
}) => (

  [
    <UrlInput key="UrlInput" getNewUrl={getNewUrl} isLoading={isLoading} />,
    <UserFilter
      key="UserFilter"
      users={users}
      filteredUsers={filteredUsers}
      onFilteredUsersChange={onFilteredUsersChange}
    />,
    <Graph
      key="Graph"
      dataGraph={dataGraph}
    />,
  ]
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilteredUsersChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};


export default SettingsMain;
