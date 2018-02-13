import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';

const TitleComments = ({ issue, isLoading }) => (

  <div className="comment title-comment">
    {isLoading ?
      <span className="placeholder ph-avatar" />
      :
      [
        <div key="userTitle" className="clearfix">
          <a href={issue.user.html_url} title={issue.user.login} className="avatar-user pull-left">
            <img alt={issue.user.login} src={issue.user.avatar_url} />
          </a>
          <h2 className="pull-left">
            Conversation with&nbsp;
            <a href={issue.user.html_url} target="_blank">
              {issue.user.login} <i className="fas fa-external-link-alt ico" />
            </a>
          </h2>
        </div>,

        <Markdown key="bodyTitle" className="body-issue">{issue.body}</Markdown>,
      ]
    }

  </div>
);

const shapeUser = PropTypes.shape({
  html_url: PropTypes.string,
  login: PropTypes.string,
  avatar_url: PropTypes.string,
});

TitleComments.propTypes = {
  issue: PropTypes.shape({
    body: PropTypes.string,
    user: shapeUser.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default TitleComments;
