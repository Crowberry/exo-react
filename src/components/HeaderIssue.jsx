import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssVar from './_abstract/cssVar';

const Header = styled.header`
  background: #303b44;
  height: 80px;

  &, h1 a {
    color: ${cssVar.txtGreyLight};
  }

  h1 {
    font-size: 22px;

    a {
      text-decoration: none;

      .ico {
        font-size: 14px;
        opacity: .7;
      }

      &:hover, &:active, &:focuse {
        text-decoration: underline;

        .ico {
          opacity: 1;
        }
      }
    }
  }

  .placeholder {
    display: block;
    height: 25px;
    width: 300px;
    background: #fff;
    opacity: 0.3;
    border-radius: 5px;

    &.ph-date {
      height: 16px;
      width: 170px;
    }
  }
`;

const HeaderIssue = ({ issue, isLoading }) => (
  <Header>
    <div className="flex-center">
      <div className="container clearfix">
        {isLoading ?
          <Fragment>
            <span key="placeholder-title" className="placeholder ph-title pull-left" />
            <span key="placeholder-date" className="placeholder ph-date pull-right" />
          </Fragment>
          :
          <Fragment>
            <h1 key="issueTitle" className="pull-left">
              <a href={issue.html_url} target="_blank">
                {issue.title} <span>#{issue.number}</span>{' '}
                <i className="fas fa-external-link-alt ico" />
              </a>
            </h1>
            <p key="issueDate" className="pull-right">{issue.created_at}</p>
          </Fragment>
        }
      </div>
    </div>
  </Header>
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
