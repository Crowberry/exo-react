import styled, { css } from 'styled-components';

const CommentStyle = styled.div`
  min-height: 50px;
  border-radius: 10px;
  background: #f5fcff;
  padding: 20px;
  line-height: 1.3333;
  word-wrap: break-word;
  float: ${props => (props.isRight ? 'right' : 'left')};
  background: ${props => (props.isRight ? '#fff' : '#f5fcff')};
  ${props => (props.isIssue ? css`
    margin-bottom: 60px;
    max-width: 100%;
  ` : css`
    margin-bottom: 30px;
    max-width: calc(100% - 65px);
  `)}

  p {
    a {
      color: #ef7f47;
    }

    :last-child {
      margin-bottom: 0;
    }
  }

  code {
    display: inline-block;
    background: #f8efed;
    padding: 1px 5px;
    font-size: 14px;
    line-height: 1.45;
    color: #303b44;
    border-radius: 3px;
    word-break: break-word;
  }
`;

export default CommentStyle;

