import React from "react";
import callApi from "../_functions/callApi";


    

class HeaderIssue extends React.Component {

  state = { issue: {}, isLoading:true };

  componentWillMount() {
    callApi()
      .then(data => {
        this.setState({ isLoading: false, issue: data });
      });
  }

  render() {
    const { isLoading, 
            issue: { 
                title,
                html_url,
                number,
                created_at
            } 
        } = this.state;

    return <header className="table">
        <div className="table-cell-center">
          <div className="container clearfix">
            <h1 className="pull-left">
              <a href={html_url} target="_blank">
                {title} <span>#{number}</span> <i className="fas fa-external-link-alt ico" />
              </a>
            </h1>

            <p className="pull-right">{created_at}</p>
          </div>
        </div>
      </header>;
  }
}

export default HeaderIssue;
