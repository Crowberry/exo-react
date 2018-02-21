import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../../Markdown';
import { Avatar } from '../../blocks/Avatar';
import CommentText from './CommentText';

// const myCOmp = () => <div className="btn-red">Click</div>;

// const myCOmp2 = color => <div style={{ background: color }}>Click</div>;

// const myButton = styled.div`
//   background: ${props => props.color}
// `;
// const myCOmp3 = color => <myButton color=red>Click</myButton>;


const Comment = ({ comment, fromAuthor }) => (
  <div className="clearfix authorIssue clear">
    <Avatar
      target="_blank"
      href={comment.user.html_url}
      title={comment.user.login}
      className="avatar-user "
      isRight={Boolean(!fromAuthor)}
    >
      <img alt={comment.user.login} src={comment.user.avatar_url} />
    </Avatar>
    <CommentText isRight={Boolean(!fromAuthor)} className="comment">
      <Markdown>{comment.body}</Markdown>
    </CommentText>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  fromAuthor: PropTypes.bool.isRequired,
};


export default Comment;
