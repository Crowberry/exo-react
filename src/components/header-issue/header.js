import React from "react";
import callApi from "../_functions/callApi";


    

class HeaderIssue extends React.Component {
  state = { issue: {}, isLoading: true };

  componentWillMount() {
    callApi(this.props.urlApiParent).then(data => {
      this.setState({ isLoading: false, issue: data });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.urlApiParent !== nextProps.urlApiParent ) {
      callApi(nextProps.urlApiParent).then(data => {
        this.setState({ isLoading: false, issue: data });
      });
    }
  }

  

  render() {
    const { isLoading, issue: { title, html_url, number, created_at } } = this.state;

    return ( isLoading ? 
                null
                :
                <div className="table-cell-center clearfix">
                    <h1 className="pull-left">
                      <a href={html_url} target="_blank">
                        {title} <span>#{number}</span>{" "}
                        <i className="fas fa-external-link-alt ico" />
                      </a>
                    </h1>

                    <p className="pull-right">{created_at}</p>
                </div>
    );
  }
}

export default HeaderIssue;
