import React from "react";
import callApi from "../../_functions/callApi";
import Markdown from "../../Markdown";


class MainThread extends React.Component {

    state = {isLoading:true,isLoading1:true, commentsData: [] , issue:{ user:{}}};

    
    componentWillMount() {
        console.log(this.props.urlApiParentBis);

        callApi(this.props.urlApiParent2).then(
            data => {
              this.setState({ issue: data, isLoading1: false });

              callApi(data.comments_url).then(dataComments => {
                this.setState({
                  isLoading: false,
                  commentsData: dataComments
                });
              });
            }
        )
    }
    

  render() {
      const {isLoading, isLoading1, commentsData, issue:{user:{id:authorIssue}}} = this.state
      
    return (
        <div className="list-comments">
            {   isLoading && isLoading1 ? "notLoaded"

                   : commentsData.map(comment => 
                        comment.user.id ===  authorIssue ? 
                        <div key={comment.id} className="clearfix authorIssue pull-left clear">
                                <a href={comment.user.html_url} title={comment.user.login} className="avatar-user pull-left">
                                        <img alt={comment.user.login} src={comment.user.avatar_url}/>
                                        
                                </a>
                                <p className='pull-left'>
                                    {comment.body}
                                </p>
                        </div>
                        
                        :
                        <div key={comment.id} className="clearfix commentsOther pull-right clear">
                                <a href={comment.user.html_url} title={comment.user.login} className="avatar-user pull-right">
                                    <img alt={comment.user.login} src={comment.user.avatar_url}/>
                                    
                                </a>
                                <p className='pull-right'>{comment.body}</p>
                                
                        </div>
                    )
            }
        </div>
    )
  }
}

export default MainThread;