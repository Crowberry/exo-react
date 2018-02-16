import React from 'react';
import HeaderIssue from './components/HeaderIssue';
import MainComments from './components/MainComments';
import SettingsMain from './components/main-comments/SettingsMain';
import fetchApiURl from './components/_functions/callApi';
import filterComments from './components/_functions/filterComments';
import sortLoginUser from './components/_functions/sortLoginUser';

class App extends React.Component {
  state = {
    urlApi: 'https://api.github.com/repos/nodejs/node/issues/6867',
    issue: {},
    comments: [],
    isLoading: true,
    filteredComments: [],
    filteredUsers: [],
    users: [],
  };

  componentWillMount() {
    fetchApiURl(this.state.urlApi)
      .then((data) => {
        this.setState({
          issue: data.issue,
          comments: data.comments,
          isLoading: false,
          filteredComments: data.comments,
          users: sortLoginUser(data.comments, data.issue),
        });
      });
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.urlApi !== nextState.urlApi) {
      fetchApiURl(nextState.urlApi)
        .then((data) => {
          this.setState({
            issue: data.issue,
            comments: data.comments,
            isLoading: false,
            filteredComments: data.comments,
            users: sortLoginUser(data.comments, data.issue),
          });
        });
    }
  }

  onFilteredUsersChange = (changedUsers) => {
    // case user add in filteredUser
    // check if user isn't already in filteredUser
    if (!this.state.filteredUsers.includes(changedUsers)) {
      this.setState(prevState => ({
        filteredUsers: [...prevState.filteredUsers, changedUsers],
        filteredComments: filterComments(prevState.filteredComments, [changedUsers]),
      }));
    } else if (this.state.filteredUsers.includes(changedUsers)) {
      // case user remove in filteredUser
      // Check if user is in filteredUser
      this.setState(prevState => ({
        filteredComments: filterComments(
          this.state.comments,
          prevState.filteredUsers.filter(item => item !== changedUsers),
        ),
        filteredUsers: prevState.filteredUsers.filter(item => item !== changedUsers),
      }));
    }
  }

  getNewUrl = (dataFromUrlInput) => {
    this.setState({ urlApi: dataFromUrlInput, isLoading: true });
  };

  fetchData(url) {
    fetchApiURl(url)
      .then((data) => {
        this.setState({
          issue: data.issue,
          comments: data.comments,
          isLoading: false,
          filteredComments: data.comments,
          users: sortLoginUser(data.comments, data.issue),
        });
      });
  }

  render() {
    const {
      issue, isLoading, filteredComments, filteredUsers, users,
    } = this.state;
    return (

      <div className="container-app">
        <HeaderIssue key="head" issue={issue} isLoading={isLoading} />

        <section className="main clearfix">
          <div className="settings-panel pull-left">
            <div className="container-settings">
              <SettingsMain
                getNewUrl={this.getNewUrl}
                isLoading={isLoading}
                users={users}
                filteredUsers={filteredUsers}
                onFilteredUsersChange={this.onFilteredUsersChange}
                issue={issue}
                filteredComments={filteredComments}
              />
            </div>
          </div>

          <div className="content-comments pull-left">
            <div className="container-thread">
              <MainComments
                key="body"
                issue={issue}
                getNewUrl={this.getNewUrl}
                isLoading={isLoading}
                filteredComments={filteredComments}
                filteredUsers={filteredUsers}
                onFilteredUsersChange={this.onFilteredUsersChange}
                users={users}
              />
            </div>
          </div>
        </section>
      </div>


    );
  }
}


export default App;
