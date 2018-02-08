import React from "react";
import axios from "axios";
import HeaderIssue from "./components/header-issue"
import BodyComments from "./components/body-comments"

class App extends React.Component {
//   componentDidMount() {
//     axios({
//         url: "https://api.github.com/repos/stadline/js-technical-test/issues/2",
//         method: "get"
//     }).then(response => {
//         console.log(response);

//         //   
//         //   console.log('corps issue ', response.data.body);
//         //   console.log('author issue ', response.data.user);
//         //   console.log("comments issue url", response.data.comments_url);
//     });
//   }



    render() {
        // return <div>Hello world</div>;

        return[
                <HeaderIssue />,
                <BodyComments />
        ]
    }
}


export default App