import React from 'react';
import HeaderIssue from './components/HeaderIssue';
import MainComments from './components/MainComments';
import fetchApiURl from './components/_functions/callApi';
import sortLoginUser from './components/_functions/sortLoginUser';

class App extends React.Component {
  state = {
    urlApi: 'https://api.github.com/repos/nodejs/node/issues/6867',
    issue: {},
    comments: [],
    isLoading: true,
    arrayUser: [],
  };

  componentWillMount() {
    fetchApiURl(this.state.urlApi)
      .then((data) => {
        let tempsArrayUser = [];
        tempsArrayUser = sortLoginUser(data.comments, data.issue);
        this.setState({
          issue: data.issue,
          comments: data.comments,
          isLoading: false,
          arrayUser: tempsArrayUser,
        });
      });
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.urlApi !== nextState.urlApi) {
      fetchApiURl(nextState.urlApi)
        .then((data) => {
          let tempsArrayUser = [];
          tempsArrayUser = sortLoginUser(data.comments, data.issue);
          this.setState({
            issue: data.issue,
            comments: data.comments,
            isLoading: false,
            arrayUser: tempsArrayUser,
          });
        });
    }
  }

  getNewUrl = (dataFromUrlInput) => {
    this.setState({ urlApi: dataFromUrlInput, isLoading: true });
  };

  render() {
    const {
      issue, comments, isLoading, arrayUser,
    } = this.state;
    return (

      <div className="container-app">
        <HeaderIssue key="head" issue={issue} isLoading={isLoading} />

        {isLoading ? 'wait' :
        <MainComments
          key="body"
          issue={issue}
          comments={comments}
          getNewUrl={this.getNewUrl}
          isLoading={isLoading}
          arrayUser={arrayUser}
        />
        }

      </div>


    );

    // return isLoading
    //   ? 'wait'
    //   : [
    //     <HeaderIssue key="head" issue={issue} />,
    //     <MainComments
    //       key="body"
    //       issue={issue}
    //       comments={comments}
    //       getNewUrl={this.getNewUrl}
    //     />,
    //   ];
  }
}


export default App;
