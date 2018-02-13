import React from 'react';
import PropTypes from 'prop-types';
import HeaderIssue from './components/HeaderIssue';
import MainComments from './components/MainComments';
import callApi from './components/_functions/callApi';


class App extends React.Component {
  static propTypes = {
    urlApi: PropTypes.string.isRequired,
    issue: PropTypes.shape({}).isRequired,
    comments: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  state = {
    urlApi: 'https://api.github.com/repos/nodejs/node/issues/6867',
    issue: {},
    comments: {},
    isLoading: true,
  };

  componentWillMount() {
    callApi(this.state.urlApi).then((data) => {
      callApi(data.comments_url).then((dataComments) => {
        this.setState({
          issue: data,
          comments: dataComments,
          isLoading: false,
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
            comments: dataComments,
            isLoading: false,
          });
        });
      });
    }
  }

  myCallback = (dataFromChild) => {
    this.setState({ urlApi: dataFromChild, isLoading: true });
  };

  render() {
    const { issue, comments, isLoading } = this.state;

    return isLoading
      ? 'wait'
      : [
        <HeaderIssue key="head" issue={issue} />,
        <MainComments
          key="body"
          issue={issue}
          comments={comments}
          callBackFromParent={this.myCallback}
        />,
      ];
  }
}


export default App;
