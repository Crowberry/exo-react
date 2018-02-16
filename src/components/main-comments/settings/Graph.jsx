import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import Rainbow from 'rainbowvis.js';

const Graph = ({ dataGraph }) => {
  const nbUsers = dataGraph.length;
  let colors = [];
  let totalWords = 0;

  const rainbow = new Rainbow();
  rainbow.setSpectrum('#ef7f47', '#b7e9ff');

  // declare value colors
  dataGraph.forEach((data, i) => {
    if (nbUsers > 1) {
      const coefRainbow = (i * 100) / (nbUsers - 1);
      colors.push(`#${rainbow.colourAt(coefRainbow)}`);
    } else {
      colors = ['#ef7f47'];
    }
    totalWords += data[1];
  });

  dataGraph.unshift(['Utilisateurs', 'nombre de mots']);

  return (
    <div className="container-graph">
      <p className="bold">Qui est le plus bavard ?</p>
      <Chart
        chartTitle="DonutChart"
        chartType="PieChart"
        data={dataGraph}
        options={{
          legend: 'none',
          tooltip: { isHtml: true },
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
        height="220px"
      />
      <ul>
        {
          dataGraph.map((user, i) => {
            const percent = Math.round(((100 * user[1]) / totalWords) * 10) / 10;
            return (
              <li className="clearfix" key={user[0]}>
                <span className="pull-left">
                  {i > 0 ?
                    <i className="color-box" style={{ background: colors[i - 1] }} />
                  : null
                  }
                  {user[0]}
                </span>
                <span className="pull-left">
                  {user[1]} {i > 0 ?
                    <b className="percent">({percent}%)</b>
                    : null
                  }
                </span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

Graph.propTypes = {
  dataGraph: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Graph;
