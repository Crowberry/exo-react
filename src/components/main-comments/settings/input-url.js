import React from "react";

export default class UrlInput extends React.Component {

  state = {urlGit: "https://api.github.com/repos/nodejs/node/issues/6867"}
  // handleInput = () => {

  // }

  handleSubmit = event => {
    let urlGit = this.inputUrl.value;
    console.log(urlGit)
    urlGit = urlGit.replace(/github.com/, "api.github.com/repos");
    event.preventDefault()
    console.log({target: event.target})
    console.log(urlGit)

    this.setState({urlGit: urlGit})
  }

  render() {
    const {urlGit} = this.state;

    return (

      <form onSubmit={this.handleSubmit}>
        <label>Changer URL</label>
        <input 
          type="text"
          ref={node => this.inputUrl = node} 
        />
        <button type="submit">Rechercher</button>
        <p>New url: {urlGit}</p>
      </form> 
    )
  }
}
