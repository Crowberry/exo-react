import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Markdown from '../Markdown';
import { Avatar, AvatarPH } from '../blocks/Avatar';
import CommentText from './blocks/CommentText';

const Author = styled.div`
  margin-bottom: 10px;

  h2 {
    font-size: 18px;
    margin-top: 15px;
    max-width: calc(100% - 65px);

    a {
      color: #40464d;
      text-decoration: none;

      .ico {
        font-size: 12px;
        opacity: .7;
      }

      &:hover, &:active, &:focus {
        text-decoration: underline;

        .ico {
          opacity: 1;
        }
      }
    }
  }
`;

const TitleComments = ({ issue, isLoading }) => (

  <CommentText isIssue="true" className="clearfix">
    {isLoading ?
      <AvatarPH className="placeholder ph-avatar" />
      :
      <Fragment>
        <Author className="clearfix">
          <Avatar href={issue.user.html_url} title={issue.user.login} className="avatar-user pull-left">
            <img alt={issue.user.login} src={issue.user.avatar_url} />
          </Avatar>
          <h2 className="pull-left">
            Conversation with&nbsp;
            <a href={issue.user.html_url} target="_blank">
              {issue.user.login} <i className="fas fa-external-link-alt ico" />
            </a>
          </h2>
        </Author>
        <Markdown className="body-issue">{issue.body}</Markdown>
      </Fragment>
    }

  </CommentText>
);

// const shapeUser = PropTypes.shape({
//   html_url: PropTypes.string,
//   login: PropTypes.string,
//   avatar_url: PropTypes.string,
// });

TitleComments.propTypes = {
  issue: PropTypes.shape({
    body: PropTypes.string,
    // user: shapeUser.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default TitleComments;
