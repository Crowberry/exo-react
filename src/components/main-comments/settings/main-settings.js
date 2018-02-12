import React from "react";
import UrlInput from "./input-url";

export default class SettingsMain extends React.Component {


  render() {

    return (
        <div className="container">
            <h2>Settings</h2>
            <UrlInput callBackFromParent={this.props.callBackFromParent} />
        
        </div>
    );
  }
}
