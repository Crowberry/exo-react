import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Markdown from '../../Markdown';

// const myCOmp = () => <div className="btn-red">Click</div>;

// const myCOmp2 = color => <div style={{ background: color }}>Click</div>;

// const myButton = styled.div`
//   background: ${props => props.color}
// `;
// const myCOmp3 = color => <myButton color=red>Click</myButton>;

const Com = styled.div`

  &, > a, .comment {
    float: right;
  }

  > a {
    margin-left: 10px;
  }

  .comment {
    background: white;
  }

  ${props => props.fromAuthor && css`
    &, > a, .comment {
      float: left;
    }

    > a {
      margin-right: 10px;
      margin-left: 0;
    }

    .comment {
      background: #f5fcff;
    }
  `}
`;

const Comment = ({ comment, fromAuthor }) => (
  <Com fromAuthor={fromAuthor} className="clearfix authorIssue clear">
    <a
      target="_blank"
      href={comment.user.html_url}
      title={comment.user.login}
      className="avatar-user "
    >
      <img alt={comment.user.login} src={comment.user.avatar_url} />
    </a>
    <Markdown className="comment">{comment.body}</Markdown>
  </Com>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  fromAuthor: PropTypes.bool.isRequired,
};


export default Comment;
