import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';

const TitleComments = ({ issue }) => (

  <div className="clearfix">
    <a href={issue.user.html_url} title={issue.user.login} className="avatar-user pull-left">
      <img alt={issue.user.login} src={issue.user.avatar_url} />
    </a>
    <div className="pull-left">
      <h2>
            Conversation with&nbsp;
            <a href={issue.user.html_url} target="_blank">
              {issue.user.login} <i className="fas fa-external-link-alt ico" />
            </a>
      </h2>

      <Markdown className="comment">{issue.body}</Markdown>

    </div>
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
};

export default TitleComments;
