import styled from 'styled-components';

// on crée un style commun a l'avatar et son placeholder
const AvatarBase = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
`;

const AvatarPH = AvatarBase.extend`
  background: #ccc;
  opacity: .5;
`;

const Avatar = AvatarBase.withComponent('a').extend`
  position: relative;
  border: 3px solid white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transform: translate3d(0,0,0);
  margin: ${props => (props.isRight ? '0 0 0 15px' : '0 15px 0 0')};
  float: ${props => (props.isRight ? 'right' : 'left')};

  :after {
    content:'';
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    top: -3px;
    left: -3px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.3);
    opacity: 0;
    transition: opacity .2s ease-in;
  }

  :hover, :active, :focus {
    :after {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: auto;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
`;

export { Avatar, AvatarPH };
