import React from "react";
import HeaderIssue from "./components/header-issue/header";
import MainComments from "./components/main-comments/main"


class App extends React.Component {
    
    render() {
        
        const urlApi = "https://api.github.com/repos/nodejs/node/issues/6867";
        
        return [
            <header key="head" className="table">
                <HeaderIssue urlApiParent={urlApi} />
            </header>, 
            <MainComments key="body" urlApiParent={urlApi} />
        ];
    }
}


export default App