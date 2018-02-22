import styled from 'styled-components';

const WrapGraph = styled.div`
  margin-top: 30px;

  .google-visualization-tooltip {
    pointer-events: none;
  }

  ul {
    li {
      margin-bottom: 5px;

      :first-child {
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: 700;
      }

      span {
        :first-child {
          width: calc(100% - 100px);
          word-break: break-all;
          padding-left: 5px;
        }
      }

      .percent {
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
`;

const ColorBox = styled.i`
  display: inline-block;
  width: 30px;
  height: 10px;
  background: red;
  margin-right: 5px;
  border-radius: 3px;
`;

export { WrapGraph, ColorBox };
