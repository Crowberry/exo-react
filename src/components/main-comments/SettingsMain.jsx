import React from 'react';
import PropTypes from 'prop-types';
import UrlInput from './settings/UrlInput';
import Graph from './settings/Graph';
// import UserFilter from './settings/UserFilter';

const SettingsMain = ({
  getNewUrl, isLoading, issue, comments,
}) => (

  [
    <UrlInput key="UrlInput" getNewUrl={getNewUrl} isLoading={isLoading} />,
    <Graph key="Graph" issue={issue} comments={comments} isLoading={isLoading} />,
    // <UserFilter key="UserFilter" arrayUser={arrayUser} checkUser={checkUser} />,
  ]
);

SettingsMain.propTypes = {
  getNewUrl: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default SettingsMain;
