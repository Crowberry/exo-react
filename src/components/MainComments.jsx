import React from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import MainThread from './main-comments/MainThread';
import SettingsMain from './main-comments/SettingsMain';

const MainComments = ({
  comments, issue, getNewUrl,
}) => (
  <section className="main clearfix">
    <div className="settings-panel pull-left">
      <SettingsMain getNewUrl={getNewUrl} />
    </div>
    <div className="content-comments pull-left">
      <div className="container">
        <div className="issue-body list-comments clearfix">
          <TitleComments issue={issue} />
        </div>
        <div className="list-comments clearfix">
          <MainThread issue={issue} comments={comments} />
        </div>
      </div>
    </div>
  </section>
);

MainComments.propTypes = {
  comments: PropTypes.shape({}).isRequired,
  issue: PropTypes.shape({}).isRequired,
  getNewUrl: PropTypes.func.isRequired,
};


export default MainComments;
