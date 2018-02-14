import React from 'react';
import HeaderIssue from './components/HeaderIssue';
import MainComments from './components/MainComments';
import fetchApiURl from './components/_functions/callApi';
// import sortLoginUser from './components/_functions/sortLoginUser';

class App extends React.Component {
  state = {
    urlApi: 'https://api.github.com/repos/nodejs/node/issues/6867',
    issue: {},
    comments: [],
    isLoading: true,
  };

  componentWillMount() {
    fetchApiURl(this.state.urlApi)
      .then((data) => {
        this.setState({
          issue: data.issue,
          comments: data.comments,
          isLoading: false,
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
          });
        });
    }
  }

  getNewUrl = (dataFromUrlInput) => {
    this.setState({ urlApi: dataFromUrlInput, isLoading: true });
  };

  render() {
    const {
      issue, comments, isLoading,
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
        />
        }

      </div>


    );
  }
}


export default App;
