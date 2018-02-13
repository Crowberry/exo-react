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
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  getNewUrl: PropTypes.func.isRequired,
};


export default MainComments;
