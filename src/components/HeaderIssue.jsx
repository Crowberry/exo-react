import React from 'react';
import PropTypes from 'prop-types';

const HeaderIssue = ({ issue, isLoading }) => (
  <header className="table">
    <div className="table-cell-center clearfix">
      {isLoading ?
        [
          <span className="placeholder ph-title pull-left" />,
          <span className="placeholder ph-date pull-right" />,
        ]
        :
        [
          <h1 key="issueTitle" className="pull-left">
            <a href={issue.html_url} target="_blank">
              {issue.title} <span>#{issue.number}</span>{' '}
              <i className="fas fa-external-link-alt ico" />
            </a>
          </h1>,
          <p key="issueDate" className="pull-right">{issue.created_at}</p>,
        ]
      }
    </div>
  </header>
);

HeaderIssue.propTypes = {
  issue: PropTypes.shape({
    html_url: PropTypes.string,
    title: PropTypes.string,
    number: PropTypes.number,
    created_at: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};


export default HeaderIssue;
