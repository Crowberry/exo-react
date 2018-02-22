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
