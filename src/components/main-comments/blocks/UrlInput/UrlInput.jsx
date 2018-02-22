import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../blocks/Button';


const UrlInput = ({
  urlGit,
  handleSubmit,
  handleChange,
  urlGitValid,
}) => (
  <form onSubmit={handleSubmit}>
    <p className="bold"><label htmlFor="urlInput">Changer URL issue github</label></p>
    <p>
      <input
        type="text"
        onChange={handleChange}
        value={urlGit}
      />
    </p>
    <Button
      primary
      type="submit"
      className="btn btn-principal"
      disabled={!urlGitValid}
    >
      Rechercher
    </Button>
  </form>
);

UrlInput.propTypes = {
  urlGit: PropTypes.string.isRequired,
  urlGitValid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default UrlInput;
// export default class UrlInput extends React.Component {
//   static propTypes = {
//     getNewUrl: PropTypes.func.isRequired,
//   }
//   state = {
//     urlGit: '',
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     let url = this.state.urlGit;
//     url = url.replace(/github.com/, 'api.github.com/repos');

//     this.props.getNewUrl(url);
//   }

//   render() {
//     const { urlGit } = this.state;

//     const isGitHub = string(urlGit).contains('github.com') && string(urlGit).contains('issues');

//     return (

// <form onSubmit={this.handleSubmit}>
//   <p className="bold"><label htmlFor="urlInput">Changer URL issue github</label></p>
//   <p>
//     <input
//       type="text"
//       onChange={this.handleChange}
//       value={urlGit}
//     />
//   </p>
//   <Button
//     primary
//     type="submit"
//     className="btn btn-principal"
//     disabled={Boolean(!isGitHub)}
//   >
//       Rechercher
//   </Button>
// </form>
//     );
//   }
// }
