import React from 'react';
import HeaderIssue from './components/HeaderIssue';
import MainComments from './components/MainComments';
import fetchApiURl from './components/_functions/callApi';
import newFormatComments from './components/_functions/newFormatComments';
import sortCommentFiltered from './components/_functions/sortCommentFiltered';

class App extends React.Component {
  state = {
    urlApi: 'https://api.github.com/repos/nodejs/node/issues/6867',
    issue: {},
    comments: [],
    isLoading: true,
    filteredComments: [],
    filteredUsers: [],
  };

  componentWillMount() {
    fetchApiURl(this.state.urlApi)
      .then((data) => {
        this.setState({
          issue: data.issue,
          comments: data.comments,
          isLoading: false,
          filteredComments: newFormatComments(data.comments),
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
            filteredComments: newFormatComments(data.comments),
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
        filteredComments: sortCommentFiltered(prevState.filteredComments, [changedUsers]),
      }));
    } else if (this.state.filteredUsers.includes(changedUsers)) {
      // case user remove in filteredUser
      // Check if user is in filteredUser
      this.setState(prevState => ({
        filteredComments: sortCommentFiltered(
          newFormatComments(this.state.comments),
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
        });
      });
  }

  render() {
    const {
      issue, comments, isLoading, filteredComments, filteredUsers,
    } = this.state;
    return (

      <div className="container-app">
        <HeaderIssue key="head" issue={issue} isLoading={isLoading} />

        <MainComments
          key="body"
          issue={issue}
          comments={comments}
          getNewUrl={this.getNewUrl}
          isLoading={isLoading}
          filteredComments={filteredComments}
          filteredUsers={filteredUsers}
          onFilteredUsersChange={this.onFilteredUsersChange}
        />

      </div>


    );
  }
}


export default App;
