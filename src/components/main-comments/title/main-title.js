import React from "react";
import callApi from "../../_functions/callApi";
import Markdown from "../../Markdown";

class TitleComments extends React.Component {
    state = {
        issue: undefined,
        isLoaded: false
    }

    componentWillMount() {
        callApi(this.props.urlApiParent2)
            .then(data => {
                this.setState({
                    issue: data,
                    isLoaded: true
                })
                console.log(data)
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
          
          <Markdown className="comment">{issue.body}</Markdown>

        </div>
      </div> 
      : null;
  }
}

export default TitleComments;
