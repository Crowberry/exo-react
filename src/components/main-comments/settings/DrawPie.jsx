import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import Rainbow from 'rainbowvis.js';

// eslint-disable-next-line react/prefer-stateless-function
class DrawPie extends React.Component {
  render() {
    const { dataGraph } = this.props;

    const nbUsers = dataGraph.length;
    let colors = [];

    if (nbUsers > 1) {
      const rainbow = new Rainbow();
      rainbow.setSpectrum('#ef7f47', '#F6B99A');

      // declare value colors
      dataGraph.forEach((data, i) => {
        const coefRainbow = (i * 100) / (nbUsers - 1);
        colors.push(`#${rainbow.colourAt(coefRainbow)}`);
      });
    } else {
      colors = ['#ef7f47'];
    }

    dataGraph.unshift(['User', 'number of words']);
    return (
      <div className="my-pretty-chart-container">
        <Chart
          chartTitle="DonutChart"
          chartType="PieChart"
          data={dataGraph}
          options={{
            width: '100%',
            height: 220,
            legend: 'none',
            backgroundColor: '#fafafa',
            chartArea: {
              left: 0, top: 10, width: '100%', height: '90%',
            },
            colors,
            fontSize: 14,
            fontName: 'Roboto, sans-serif',
            pieSliceTextStyle: { color: 'white', fontSize: 16, fontWeight: 700 },
          }}
          graph_id="ScatterChart"
          width="100%"
          height="400px"
        />
      </div>
    );
  }
}

export default DrawPie;
