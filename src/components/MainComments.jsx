import React from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import MainThread from './main-comments/MainThread';
import SettingsMain from './main-comments/SettingsMain';

const MainComments = ({
  comments, issue, getNewUrl, isLoading,
}) => (
  <section className="main clearfix">
    <div className="settings-panel pull-left">
      <SettingsMain getNewUrl={getNewUrl} isLoading={isLoading} />
    </div>
    <div className="content-comments pull-left">
      <div className="container">
        <div className="issue-body list-comments clearfix">
          <TitleComments issue={issue} isLoading={isLoading} />
        </div>
        <div className="list-comments clearfix">
          <MainThread issue={issue} comments={comments} isLoading={isLoading} />
        </div>
      </div>
    </div>
  </section>
);

MainComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  getNewUrl: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};


export default MainComments;
