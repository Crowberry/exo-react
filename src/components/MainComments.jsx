import React from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import MainThread from './main-comments/MainThread';
import SettingsMain from './main-comments/SettingsMain';


const MainComments = ({
  issue,
  getNewUrl,
  isLoading,
  filteredComments,
  filteredUsers,
  onFilteredUsersChange,
  users,
}) => (

  isLoading ? null :
  <section className="main clearfix">
    <div className="settings-panel pull-left">
      <div className="container-settings">
        <SettingsMain
          getNewUrl={getNewUrl}
          isLoading={isLoading}
          users={users}
          filteredUsers={filteredUsers}
          onFilteredUsersChange={onFilteredUsersChange}
          issue={issue}
          filteredComments={filteredComments}
        />
      </div>
    </div>
    <div className="content-comments pull-left">
      <div className="container-thread">
        <div className="issue-body list-comments clearfix">
          <TitleComments
            issue={issue}
            isLoading={isLoading}
          />
        </div>
        <div className="list-comments clearfix">
          <MainThread
            issue={issue}
            isLoading={isLoading}
            filteredComments={filteredComments}
          />
        </div>
      </div>
    </div>
  </section>
);


MainComments.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  getNewUrl: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilteredUsersChange: PropTypes.func.isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default MainComments;
