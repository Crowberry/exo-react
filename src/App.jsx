import React from 'react';
import PropTypes from 'prop-types';
import HeaderIssue from './components/HeaderIssue';
import MainComments from './components/MainComments';
import callApi from './components/_functions/callApi';


class App extends React.Component {
state= {
  urlApi: 'https://api.github.com/repos/nodejs/node/issues/6867',
  issue: {},
  commentsData: {},
  isLoading: true,
};

componentWillMount() {
  callApi(this.state.urlApi).then((data) => {
    callApi(data.comments_url).then((dataComments) => {
      this.setState({
        issue: data,
        isLoading: false,
        commentsData: dataComments,
      });
    });
  });
}

componentWillUpdate(nextProps, nextState) {
  if (this.state.urlApi !== nextState.urlApi) {
    callApi(nextState.urlApi).then((data) => {
      callApi(data.comments_url).then((dataComments) => {
        this.setState({
          issue: data,
          isLoading: false,
          commentsData: dataComments,
        });
      });
    });
  }
}

getNewUrl = (dataFromUrlInput) => {
  this.setState({
    urlApi: dataFromUrlInput,
    isLoading: true,
  });
}

render() {
  const { issue, isLoading, commentsData } = this.state;
  return isLoading ? 'not loaded'
    : [
      <HeaderIssue issue={issue} />,
      <MainComments commentsData={commentsData} issue={issue} getNewUrl={this.getNewUrl} />,
    ];
}
}

App.propTypes = {
  // issue: PropTypes.shape({

  // }).isRequired,
  // commentsData: PropTypes.shape({

  // }).isRequired,
};

export default App;
