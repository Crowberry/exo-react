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

    return isLoaded ? <div className="clearfix">
        <a href={issue.user.html_url} title={issue.user.login} className="avatar-user pull-left">
          <img alt={issue.user.login} src={issue.user.avatar_url} />
        </a>
        <div className="pull-left">
          <h2>
            Conversation with <a href={issue.user.html_url} target="_blank">
              {issue.user.login} <i className="fas fa-external-link-alt ico" />
            </a>
          </h2>
            <p key={issue.user.id}>{issue.body}</p>
        </div>
      </div> : null;
  }
}

export default TitleComments;
