import styled from 'styled-components';

const UserFilterStyle = styled.form`
margin-top: 30px;

input[type="checkbox"] {
  display: none;
}

label {
padding: 5px;
transition: color .2s ease-in, background-color .2s ease-in;
position: relative;
text-indent: 20px;
cursor: pointer;

  &:hover, &:focus, &:active {
    background: #f0f3f5;
    color: #40464d;
  }

  &:before, &:after{  
    display:block;
    position:absolute;
    cursor:pointer;
  }

  &:before {
    content:'';
    background-color: white;
    border-radius: 3px;
    border:1px solid #6c7680;
    width:16px;
    height:16px;
  }

  &:after {
    opacity: 0;
    content:"✔";
    color: #ef7f47;
    transition: opacity .2s ease-in;
    font-size:14px;
    font-size: 15px;
    top: 7px;
    left: 7px;
    text-indent: 0;
  }
}
input[type="checkbox"]:checked label {
  color: #ef7f47;
}

input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
`;

export default UserFilterStyle;
