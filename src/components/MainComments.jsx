import React from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import MainThread from './main-comments/MainThread';
import SettingsMain from './main-comments/SettingsMain';
import sortLoginUser from './_functions/sortLoginUser';
import arrayGraph from './_functions/arrayGraph';

class MainComments extends React.Component {
  state = {
    filteredUsers: [],
  }

  onFilteredUsersChange = (changedUsers) => {
    // case user add in filteredUser
    // check if user isn't already in filteredUser
    if (!this.state.filteredUsers.includes(changedUsers)) {
      this.setState(prevState => ({
        filteredUsers: [...prevState.filteredUsers, changedUsers],
      }));
    } else if (this.state.filteredUsers.includes(changedUsers)) {
      // case user remove in filteredUser
      // Check if user is in filteredUser
      this.setState(prevState => ({
        filteredUsers: prevState.filteredUsers.filter(item => item !== changedUsers),
      }));
    }
  }

  render() {
    const {
      comments,
      issue,
      getNewUrl,
      isLoading,
    } = this.props;

    const { filteredUsers } = this.state;

    // arrayGraph({ issue, comments }, sortLoginUser(comments, issue), filteredUsers);
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
              onFilteredUsersChange={this.onFilteredUsersChange}
              issue={issue}
              comments={comments}
              dataGraph={arrayGraph({ issue, comments }, sortLoginUser(comments, issue), filteredUsers)}
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
                comments={comments}
                isLoading={isLoading}
                filteredUsers={filteredUsers}
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

};


export default MainComments;
