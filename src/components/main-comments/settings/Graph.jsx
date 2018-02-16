import React from 'react';
import PropTypes from 'prop-types';
import DrawPie from './DrawPie';


const Graph = ({
  isLoading, dataGraph,
}) => (
  <div className="container-graph">
    <p>Qui est le plus bavard ?</p>
    {isLoading ? 'wait' :
    <DrawPie
      dataGraph={dataGraph}
    />
      }
  </div>
);

Graph.propTypes = {
  dataGraph: PropTypes.arrayOf(PropTypes.array).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Graph;
