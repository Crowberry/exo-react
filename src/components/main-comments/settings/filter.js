import React from 'react';
import callApi from '../../_functions/callApi';
import RemoveDupArray from '../../_functions/removeDupArray';


export default class Filter extends React.Component {
    state = {
      isLoading: true, isLoading1: true, issue: {}, commentsData: [], userLogin: [],
    }

    componentWillMount() {
      callApi(this.props.urlApiParent3).then((data) => {
        this.setState({ issue: data, isLoading1: false });

        callApi(data.comments_url).then((dataComments) => {
          this.setState({
            isLoading: false,
            commentsData: dataComments,
          });
          console.log(dataComments);
          let userLogin;
          dataComments.forEach((comment) => {
            console.log(comment.user.login);
          });
        });
      });
    }


    render() {
      const {
        isLoading, isLoading1, commentsData, userLogin,
      } = this.state;

      return isLoading && isLoading1

        ? 'notLoaded'

        : <div>

          {
                    commentsData.forEach(comment => userLogin.push(comment.user.login))

                }
          <div>
            {RemoveDupArray(userLogin)}

          </div>
          </div>;
    }
}
