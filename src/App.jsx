import React from 'react';
import HeaderIssue from './components/HeaderIssue';
import MainComments from './components/main-comments/main';
import callApi from './components/_functions/callApi';


class App extends React.Component {
  state = {
    urlApi: 'https://api.github.com/repos/nodejs/node/issues/6867',
    issue: {},
    comments: {},
  };


  componentWillMount() {
    callApi(this.state.urlApi).then((data) => {
      this.setState({ issue: data });

      callApi(data.comments_url).then((dataComments) => {
        this.setState({
          comments: dataComments,
        });
      });
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.state.urlApi !== nextProps.urlApi) {
  //     callApi(nextProps.urlApiParent).then((data) => {
  //       this.setState({ issue: data });

  //       callApi(data.comments_url).then((dataComments) => {
  //         this.setState({
  //           comments: dataComments,
  //         });
  //       });
  //     });
  //   }
  // }


  myCallback = (dataFromChild) => {
    this.setState({ urlApi: dataFromChild });
    console.log(dataFromChild);
  };


  render() {
    const {
      urlApi,
      issue,
    } = this.state;

    return [
      <header key="head" className="table">
        <HeaderIssue urlApi={urlApi} issue={issue} />
      </header>,
      <MainComments
        key="body"
        urlApiParent={urlApi}
        callBackFromParent={this.myCallback}
      />,
    ];
  }
}


export default App;
