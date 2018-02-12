import React from "react";
import HeaderIssue from "./components/header-issue/header";
import MainComments from "./components/main-comments/main"


class App extends React.Component {
  state = { urlApi: "https://api.github.com/repos/nodejs/node/issues/6867" };

  
  myCallback = dataFromChild => {
    this.setState({ urlApi: dataFromChild });
    console.log(dataFromChild);
  };


  render() {
    const { urlApi } = this.state;

    return [
      <header key="head" className="table">
        <HeaderIssue urlApiParent={urlApi} />
      </header>,
      <MainComments
        key="body"
        urlApiParent={urlApi}
        callBackFromParent={this.myCallback}
      />
    ];
  }
}


export default App