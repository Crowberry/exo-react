import React from 'react';
import PropTypes from 'prop-types';
import GoogleChart from 'google-chart-react';
import arrayGraph from '../../_functions/arrayGraph';


class Graph extends React.Component {
  drawPieChart = (chartID) => {
    const { issue, comments } = this.props;
    const array = arrayGraph({ issue, comments });

    const data = new window.google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(array);
    const options = {
      title: 'Qui est le plus bavard ?',
      width: 260,
      height: 300,
    };
    const chart = new window.google.visualization.PieChart(document.getElementById(chartID));
    chart.draw(data, options);
  };

  render() {
    const { isLoading } = this.props;

    return (
      <div className="container-graph">
        <p>Qui est le plus bavard ?</p>
        {isLoading ? 'wait' :
        <GoogleChart drawChart={this.drawPieChart} />
        }
      </div>
    );
  }
}


// console.log(wordsUsers);


Graph.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};


export default Graph;
