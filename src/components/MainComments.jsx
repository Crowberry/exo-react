import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import MainThread from './main-comments/MainThread';


const MainComments = ({
  issue,
  isLoading,
  filteredComments,
}) => (

  isLoading ? null :

  <Fragment>
    <div className="issue-body list-comments clearfix">
      <TitleComments
        issue={issue}
        isLoading={isLoading}
      />
    </div>
    <div className="list-comments clearfix">
      <MainThread
        issue={issue}
        isLoading={isLoading}
        filteredComments={filteredComments}
      />
    </div>
  </Fragment>
);


MainComments.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isLoading: PropTypes.bool.isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};


export default MainComments;
