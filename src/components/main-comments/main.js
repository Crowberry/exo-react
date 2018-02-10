import React from "react";
import TitleComments from "./title/main-title"
import MainThread from "./thread/main-thread";

class MainComments extends React.Component {
  render() {
    return <section className="main clearfix">
        <div className="settings-panel pull-left" />
        <div className="content-comments pull-left">
          <div className="container">
            <div className="issue-body list-comments clearfix">
              <TitleComments />
            </div>
            <div className="list-comments clearfix">
              <MainThread />
            </div>
          </div>
        </div>
      </section>;
  }
}

export default MainComments;
