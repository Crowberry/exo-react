import React from "react";
import HeaderIssue from "./components/header-issue/header";

// import MainComments from "./components/body-comments/main"
// import WithFetching from "./components/_functions/callApi";

// const urlTest =
//   "https://api.github.com/repos/stadline/js-technical-test/issues/2/comments";

// withFetching(urlest);

class App extends React.Component {

    


    render() {
        // return <div>Hello world</div>;

        return <HeaderIssue />;

        // return [
        //     // <CallApi />
        //     // <HeaderIssue />,
        //     // <MainComments />
        // ]
    }
}


export default App