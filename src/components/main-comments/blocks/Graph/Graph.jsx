import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import { WrapGraph, ColorBox } from './GraphStyled';

const Graph = ({ dataGraph, colors, totalWords }) => (
  <WrapGraph className="container-graph">
    <p className="bold">Qui est le plus bavard ?</p>
    {dataGraph.length > 1 ?
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
      :
      null
    }
    <ul>
      {dataGraph.map((user, i) => {
          const percent = Math.round(((100 * user[1]) / totalWords) * 10) / 10;
          return (
            <li className="clearfix" key={user[0]}>
              <span className="pull-left">
                {i > 0 ?
                  <ColorBox className="color-box" style={{ background: colors[i - 1] }} />
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
  </WrapGraph>
);
Graph.propTypes = {
  dataGraph: PropTypes.arrayOf(PropTypes.array).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalWords: PropTypes.number.isRequired,
};

export default Graph;
