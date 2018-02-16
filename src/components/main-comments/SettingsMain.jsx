import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';
import Graph from './settings/Graph';
import UserFilter from './settings/UserFilter';

const SettingsMain = ({
  getNewUrl, isLoading, users, filteredUsers, onFilteredUsersChange, issue, comments, dataGraph,
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
      issue={issue}
      comments={comments}
      isLoading={isLoading}
      users={users}
      filteredUsers={filteredUsers}
      dataGraph={dataGraph}
    />,
  ]
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilteredUsersChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default SettingsMain;
