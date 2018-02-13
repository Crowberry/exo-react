import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';
// import Filter from './settings/Filter';

const SettingsMain = ({ commentsData, issue, getNewUrl }) => (
  <div className="container">
    <h2>Settings</h2>
    <UrlInput issue={issue} commentsData={commentsData} getNewUrl={getNewUrl} />
    {/* <Filter urlApiParent3={this.props.urlApiParent2} /> */}
  </div>
);

SettingsMain.propTypes = {
  commentsData: PropTypes.shape({
  }).isRequired,
  issue: PropTypes.shape({
  }).isRequired,
  getNewUrl: PropTypes.func.isRequired,
};

export default SettingsMain;
