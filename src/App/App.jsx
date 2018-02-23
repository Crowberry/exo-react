import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderIssue from '../components/HeaderIssue';
import MainComments from '../components/MainComments';
import SettingsMain from '../components/main-comments/SettingsMain';

const Main = styled.section`
  background: #fafafa;

  > div {
    min-height: calc(100vh - 80px);
  }

  .settings-panel {
    width: calc(50% - 160px);
  }

  .content-comments {
    width: calc(50% + 160px);
    background: #f0f3f5;
    border-left: 1px solid rgb(209, 220, 228);
    margin: 0;
  }

  .container-thread, .container-settings {
    max-width: 100%;
  }

  .container-thread {
    padding: 30px;
    width: 640px;
  }
`;

const App = ({
  issue,
  isLoading,
  filteredComments,
  filteredUsers,
  users,
  getNewUrl,
  onFilteredUsersChange,
  onAddNewComment,
}) => (
  <div className="container-app">

    <HeaderIssue key="head" issue={issue || {}} isLoading={isLoading} />

    <Main className="main clearfix">
      <div className="settings-panel pull-left">
        <SettingsMain
          getNewUrl={getNewUrl}
          isLoading={isLoading}
          users={users}
          filteredUsers={filteredUsers}
          onFilteredUsersChange={onFilteredUsersChange}
          issue={issue || {}}
          filteredComments={filteredComments}
        />
      </div>

      <div className="content-comments pull-left">
        <div className="container-thread">
          <MainComments
            key="body"
            issue={issue || {}}
            getNewUrl={getNewUrl}
            isLoading={isLoading}
            filteredComments={filteredComments}
            filteredUsers={filteredUsers}
            onFilteredUsersChange={onFilteredUsersChange}
            users={users}
            onAddNewComment={onAddNewComment}
          />
        </div>
      </div>
    </Main>
  </div>
);

App.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isLoading: PropTypes.bool.isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  getNewUrl: PropTypes.func.isRequired,
  onFilteredUsersChange: PropTypes.func.isRequired,
  onAddNewComment: PropTypes.func.isRequired,
};

export default App;
