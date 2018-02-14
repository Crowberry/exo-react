import React from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-minimal-pie-chart';
import arrayGraph from '../../_functions/arrayGraph';


const Graph = ({ issue, comments, isLoading }) => {
  if (!isLoading) {
    arrayGraph({ issue, comments });
  }

  return (
    <div className="container-graph">
      <p>Qui est le plus bavard ?</p>

      <PieChart
        data={[
          { value: 10, key: 1, color: '#E38627' },
          { value: 15, key: 2, color: '#C13C37' },
          { value: 20, key: 3, color: '#6A2135' },
        ]}
      />
    </div>
  );
};

Graph.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};


export default Graph;
