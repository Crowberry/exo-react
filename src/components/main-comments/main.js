import React from "react";
import TitleComments from "./title/main-title"
import MainThread from "./thread/main-thread";

class MainComments extends React.Component {
  render() {
    return <section className="main clearfix">
        <div className="settings-panel pull-left" />
        <div className="content-comments pull-left">
          <div className="issue-body" />
          <div className="list-comments">
            <TitleComments />
            <MainThread />
          </div>
        </div>
      </section>;
  }
}

export default MainComments;
