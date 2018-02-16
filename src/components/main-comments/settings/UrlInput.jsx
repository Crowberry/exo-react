import React from 'react';
import PropTypes from 'prop-types';
import string from 'string';

export default class UrlInput extends React.Component {
  static propTypes = {
    getNewUrl: PropTypes.func.isRequired,
  }
  state = {
    urlGit: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let url = this.state.urlGit;
    url = url.replace(/github.com/, 'api.github.com/repos');

    this.props.getNewUrl(url);
  }

  handleChange = (event) => {
    this.setState({
      urlGit: event.target.value,
    });
  }

  render() {
    const { urlGit } = this.state;

    const isGitHub = string(urlGit).contains('github.com') && string(urlGit).contains('issues');

    return (

      <form onSubmit={this.handleSubmit}>
        <p className="bold"><label htmlFor="urlInput">Changer URL issue github</label></p>
        <p>
          <input
            type="text"
            onChange={this.handleChange}
            value={urlGit}
          />
        </p>
        <p>
          <button
            type="submit"
            className="btn btn-principal"
            disabled={Boolean(!isGitHub)}
          >
            Rechercher
          </button>
        </p>
      </form>
    );
  }
}
