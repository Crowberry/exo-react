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
        <h2 className="pull-left">
          Conversation with <a href={issue.user.html_url} target="_blank">
            {issue.user.login} <i className="fas fa-external-link-alt ico" />
          </a>
        </h2>

        <div key={issue.user.id} className="authorIssue pull-left clears">
          <p className="pull-left">{issue.body}</p>
        </div>
      </div> : null;
  }
}

export default TitleComments;
