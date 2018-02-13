import React from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import MainThread from './main-comments/MainThread';
import SettingsMain from './main-comments/SettingsMain';

const MainComments = ({
  comments, issue, callBackFromParent,
}) => (
  <section className="main clearfix">
    <div className="settings-panel pull-left">
      <SettingsMain callBackFromParent={callBackFromParent} />
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
  callBackFromParent: PropTypes.func.isRequired,
};


export default MainComments;
