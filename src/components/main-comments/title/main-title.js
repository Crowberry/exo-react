import React from "react";
import callApi from "../../_functions/callApi";

class TitleComments extends React.Component {
    state = {
        issue: undefined,
        isLoaded: false
    }

    componentWillMount() {
        callApi()
            .then(data => {
                this.setState({
                    issue: data,
                    isLoaded: true
                })
            }
        )
    }

    
  render() {
    const {issue, isLoaded} = this.state;

    return isLoaded ? (
      <div>
          Conversation with <a href={issue.user.html_url} target="_blank">
            {issue.user.login}
          </a>
          

          
      </div> 
    ) : null;
  }
}

export default TitleComments;
