import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
<<<<<<< HEAD
import UrlInput from './blocks/UrlInput/';
import Graph from './blocks/Graph';
import UserFilter from './blocks/UserFilter/';
=======
import UrlInput from './blocks/UrlInput';
import Graph from './blocks/Graph/';
import UserFilter from './blocks/UserFilter';
>>>>>>> master

const WrapSettings = styled.div`
  padding: 30px;
  width: 320px;
  float: right;

  form {
    label {
      display: block;
    }

    input[type="text"] {
      width: 100%;
      padding: 8px 5px;
    }
  }
`;

const SettingsMain = ({
  getNewUrl, isLoading, users, filteredUsers, filteredComments, issue, onFilteredUsersChange,
}) => (

  <WrapSettings>
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
    />
  </WrapSettings>
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilteredUsersChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.object).isRequired,
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default SettingsMain;
