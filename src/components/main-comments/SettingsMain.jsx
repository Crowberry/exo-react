import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UrlInput from './blocks/UrlInput';
import Graph from './blocks/Graph';
import UserFilter from './blocks/UserFilter';

const SettingsMain = ({
  getNewUrl, isLoading, users, filteredUsers, filteredComments, issue, onFilteredUsersChange,
}) => (

  <Fragment>
    <UrlInput
      key="UrlInput"
      getNewUrl={getNewUrl}
      isLoading={isLoading}
    />
    <UserFilter
      key="UserFilter"
      users={users}
      filteredUsers={filteredUsers}
      onFilteredUsersChange={onFilteredUsersChange}
    />
    <Graph
      key="Graph"
      issue={issue}
      filteredComments={filteredComments}
      filteredUsers={filteredUsers}
      users={users}
      // dataGraph={dataGraph}
    />
  </Fragment>
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilteredUsersChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default SettingsMain;
