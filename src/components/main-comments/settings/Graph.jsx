import React from 'react';
import PropTypes from 'prop-types';
import DrawPie from './DrawPie';


const Graph = ({
  isLoading, issue, comments, users, filteredUsers, dataGraph,
}) => (
  <div className="container-graph">
    <p>Qui est le plus bavard ?</p>
    {isLoading ? 'wait' :
    <DrawPie
      issue={issue}
      comments={comments}
      users={users}
      filteredUsers={filteredUsers}
      dataGraph={dataGraph}
    />
      }
  </div>
);

Graph.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataGraph: PropTypes.arrayOf(PropTypes.array).isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Graph;
