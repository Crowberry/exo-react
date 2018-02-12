import React from 'react';
import PropTypes from 'prop-types';

export default class UrlInput extends React.Component {
  static propTypes = {
    callBackFromParent: PropTypes.func.isRequired,
  }

  state = { urlGit: '' }

  handleSubmit = (event) => {
    event.preventDefault();
    let url = this.state.urlGit;

    url = url.replace(/github.com/, 'api.github.com/repos');

    this.props.callBackFromParent(url);
  }

  handleChange = (event) => {
    this.setState({
      urlGit: event.target.value,
    });
  }

  render() {
    const { urlGit } = this.state;

    return (

      <form onSubmit={this.handleSubmit}>
        <label>Changer URL</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.urlGit}
        />
        <button type="submit">Rechercher</button>
        <p>New url: {urlGit}</p>
      </form>
    );
  }
}
