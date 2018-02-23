import styled, { css } from 'styled-components';

const Button = styled.button`
  background: #fff;
  color: #ef7f47;
  border: 2px solid #ef7f47;
  font: inherit;
  line-height: normal;
  overflow: visible;
  -webkit-user-select: none;
  user-select: none;
  display: block;
  width: 100%;
  padding: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: color .15s ease-in, background-color .15s ease-in;

  ${props => props.primary && css`
      color: #fff;
      background: #ef7f47;

      :not(:disabled) {
        :hover, :active, :focus {
          background: #fff;
          color: #ef7f47;
        }
      }
    `}

  :disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;

export default Button;
