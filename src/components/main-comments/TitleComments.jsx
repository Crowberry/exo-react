import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';

const TitleComments = ({ issue }) => (
  <div>
    <a href={issue.user.html_url} title={issue.user.login} className="avatar-user pull-left">
      <img alt={issue.user.login} src={issue.user.avatar_url} />
    </a>
    <div className="pull-left">
      <h2>
        Conversation with
        <a href={issue.user.html_url} target="_blank">
          {issue.user.login}
          <i className="fas fa-external-link-alt ico" />
        </a>
      </h2>

      <Markdown className="comment">{issue.body}</Markdown>
    </div>
  </div>
);

TitleComments.propTypes = {
  issue: PropTypes.shape({
    user: PropTypes.shape({
      login: PropTypes.string,
      html_url: PropTypes.string,
      avatar_url: PropTypes.string,
      body: PropTypes.string,
    }),
  }).isRequired,

};

export default TitleComments;
