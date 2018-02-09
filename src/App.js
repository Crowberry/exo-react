import React from "react";
import HeaderIssue from "./components/header-issue/header";
import MainComments from "./components/main-comments/main"

// import WithFetching from "./components/_functions/callApi";

// const urlTest =
//   "https://api.github.com/repos/stadline/js-technical-test/issues/2/comments";

// withFetching(urlest);

class App extends React.Component {

    


    render() {
        
        return [
            <HeaderIssue key="head" />,
            <MainComments key="body" />
        ]
    }
}


export default App