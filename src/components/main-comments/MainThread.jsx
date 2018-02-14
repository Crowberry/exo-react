import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';

// class MainThread extends React.Component {
//   static propTypes = {
//     issue: PropTypes.arrayOf(PropTypes.object).isRequired,
//     comments: PropTypes.arrayOf(PropTypes.object).isRequired,
//     userChecked: PropTypes.arrayOf(PropTypes.string).isRequired,
//     isLoading: PropTypes.bool.isRequired,
//   }

//   state = {
//     issue: this.props.issue,
//     comments: this.props.comments,
//     userChecked: this.props.userChecked,
//     isLoading: this.props.isLoading,
//   }

//   componentWillUpdate() {
//     console.log(this.state.userChecked);
//   }

//   render() {
//     const {
//       issue, comments, userChecked, isLoading,
//     } = this.state;
//     return (
//       <div className="list-comments">
//         {isLoading ?
//           <p className="txt-center">Chargement des commentaires...</p>
//           :
//           comments.map(comment =>
//             (!userChecked.includes(comment.user.login) ?
//               (comment.user.id === issue.user.id ? (
//                 <div
//                   key={comment.id}
//                   className="clearfix authorIssue pull-left clear"
//                 >
//                   <a
//                     href={comment.user.html_url}
//                     title={comment.user.login}
//                     className="avatar-user pull-left"
//                   >
//                     <img
//                       alt={comment.user.login}
//                       src={comment.user.avatar_url}
//                     />
//                   </a>
//                   <Markdown className="pull-left comment">
//                     {comment.body}
//                   </Markdown>
//                 </div>
//               ) : (
//                 <div
//                   key={comment.id}
//                   className="clearfix commentsOther pull-right clear"
//                 >
//                   <a
//                     href={comment.user.html_url}
//                     title={comment.user.login}
//                     className="avatar-user pull-right"
//                   >
//                     <img
//                       alt={comment.user.login}
//                       src={comment.user.avatar_url}
//                     />
//                   </a>
//                   <Markdown className="pull-right comment">
//                     {comment.body}
//                   </Markdown>
//                 </div>
//                 ))
//               : null))
//         }
//       </div>
//     );
//   }
// }

const MainThread = ({
  issue, comments, isLoading,
}) => (
  <div className="list-comments">
    {isLoading ?
      <p className="txt-center">Chargement des commentaires...</p>
        :
        comments.map(comment =>

            (comment.user.id === issue.user.id ? (
              <div
                key={comment.id}
                className="clearfix authorIssue pull-left clear"
              >
                <a
                  href={comment.user.html_url}
                  title={comment.user.login}
                  className="avatar-user pull-left"
                >
                  <img
                    alt={comment.user.login}
                    src={comment.user.avatar_url}
                  />
                </a>
                <Markdown className="pull-left comment">
                  {comment.body}
                </Markdown>
              </div>
            ) : (
              <div
                key={comment.id}
                className="clearfix commentsOther pull-right clear"
              >
                <a
                  href={comment.user.html_url}
                  title={comment.user.login}
                  className="avatar-user pull-right"
                >
                  <img
                    alt={comment.user.login}
                    src={comment.user.avatar_url}
                  />
                </a>
                <Markdown className="pull-right comment">
                  {comment.body}
                </Markdown>
              </div>
            )))
    }
  </div>
);

const shapeComUser = PropTypes.shape({
  id: PropTypes.number,
  html_url: PropTypes.string,
  login: PropTypes.string,
  avatar_url: PropTypes.string,
});

// const shapeIssueUser = PropTypes.shape({
//   id: PropTypes.number,
//   html_url: PropTypes.string,
//   login: PropTypes.string,
//   avatar_url: PropTypes.string,
// });

MainThread.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: shapeComUser.isRequired,
  })).isRequired,
  // issue: PropTypes.shape({
  //   user: shapeIssueUser.isRequired,
  // }).isRequired,
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isLoading: PropTypes.bool.isRequired,
};

export default MainThread;
