import React from 'react';
import PropTypes from 'prop-types';

class UrlInput extends React.Component {
  state = { urlGit: 'https://api.github.com/repos/nodejs/node/issues/6867' }

  handleChange = (event) => {
    this.setState({ urlGit: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let url = this.state.urlGit;
    url = url.replace(/github.com/, 'api.github.com/repos');
    this.props.getNewUrl(url);
  }

  render() {
    const { urlGit } = this.state;
    return (

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="UrlInput">Changer URL
          <input
            id="UrlInput"
            type="text"
            onChange={this.handleChange}
            value={urlGit}
          />
        </label>
        <button type="submit">Rechercher</button>
        <p>New url: {urlGit}</p>
      </form>
    );
  }
}

UrlInput.propTypes = {
  getNewUrl: PropTypes.func.isRequired,

};

export default UrlInput;
