import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../../Markdown';

const Comment = ({ comment, direction }) => (
  <div
    className={`clearfix authorIssue clear ${direction}`}
  >
    <a
      href={comment.user.html_url}
      title={comment.user.login}
      className={`avatar-user ${direction}`}
    >
      <img
        alt={comment.user.login}
        src={comment.user.avatar_url}
      />
    </a>
    <Markdown className={`comment ${direction}`} >
      {comment.body}
    </Markdown>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  direction: PropTypes.string.isRequired,
};


export default Comment;
