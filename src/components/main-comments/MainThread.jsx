import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';

const MainThread = ({ commentsData, issue }) => (
  <div className="list-comments">
    {
    commentsData.map(comment => (
    comment.user.id === issue.user.id ?
      <div key={comment.id} className="clearfix authorIssue pull-left clear">
        <a href={comment.user.html_url} title={comment.user.login} className="avatar-user pull-left">
          <img alt={comment.user.login} src={comment.user.avatar_url} />
        </a>
        <Markdown className="pull-left comment" >{comment.body}</Markdown>
      </div>

    :
      <div key={comment.id} className="clearfix commentsOther pull-right clear">
        <a href={comment.user.html_url} title={comment.user.login} className="avatar-user pull-right">
          <img alt={comment.user.login} src={comment.user.avatar_url} />
        </a>
        <Markdown className="pull-right comment" >{comment.body}</Markdown>
      </div>
      ))
    }
  </div>
);

MainThread.propTypes = {
  issue: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  commentsData: PropTypes.shape({
    user: PropTypes.shape({
      html_url: PropTypes.string,
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    id: PropTypes.number,
    body: PropTypes.string,
  }).isRequired,
};

export default MainThread;
