import React from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import MainThread from './main-comments/MainThread';
import SettingsMain from './main-comments/SettingsMain';
import sortLoginUser from './_functions/sortLoginUser';
import arrayGraph from './_functions/arrayGraph';


class MainComments extends React.Component {
  state = {

  }


  render() {
    const {
      comments,
      issue,
      getNewUrl,
      isLoading,
      filteredComments,
      filteredUsers,
      onFilteredUsersChange,
    } = this.props;
    // const { filteredUsers } = this.state;

    return (

      isLoading ? null :
      <section className="main clearfix">
        <div className="settings-panel pull-left">
          <div className="container-settings">
            <SettingsMain
              getNewUrl={getNewUrl}
              isLoading={isLoading}
              users={sortLoginUser(comments, issue)}
              filteredUsers={filteredUsers}
              onFilteredUsersChange={onFilteredUsersChange}
              issue={issue}
              comments={comments}
              dataGraph={
                arrayGraph({ issue, comments }, sortLoginUser(comments, issue), filteredUsers)
              }
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
  }
}


MainComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  getNewUrl: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilteredUsersChange: PropTypes.func.isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default MainComments;
