import React from "react";
import TitleComments from "./title/main-title"
import MainThread from "./thread/main-thread";
import SettingsMain from "./settings/main-settings";

class MainComments extends React.Component {
  render() {


    return <section className="main clearfix">
        <div className="settings-panel pull-left">
          <SettingsMain />
        </div>
        <div className="content-comments pull-left">
          <div className="container">
            <div className="issue-body list-comments clearfix">
              <TitleComments urlApiParent2={this.props.urlApiParent} />
            </div>
            <div className="list-comments clearfix">
              <MainThread urlApiParent2={this.props.urlApiParent} />
            </div>
          </div>
        </div>
      </section>;
  }
}

export default MainComments;
