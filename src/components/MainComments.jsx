import React from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import MainThread from './main-comments/MainThread';
import SettingsMain from './main-comments/SettingsMain';

class MainComments extends React.Component {
  static propTypes = {
    issue: PropTypes.arrayOf(PropTypes.object).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayUser: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  state = {
    userChecked: [],
    issue: this.props.issue,
    comments: this.props.comments,
    arrayUser: this.props.arrayUser,

  }

  checkUser = (dataFromCheck) => {
    this.setState({
      userChecked: dataFromCheck,
    });
  }

  render() {
    const {
      comments,
      issue,
      getNewUrl,
      isLoading,
      arrayUser,
      userChecked,
    } = this.state;

    console.log('inmain ', userChecked);
    return (
      <section className="main clearfix">
        <div className="settings-panel pull-left">
          <div className="container-settings">
            <SettingsMain
              getNewUrl={getNewUrl}
              isLoading={isLoading}
              arrayUser={arrayUser}
              checkUser={this.checkUser}
            />
          </div>
        </div>
        <div className="content-comments pull-left">
          <div className="container-thread">
            <div className="issue-body list-comments clearfix">
              <TitleComments
                issue={issue}
                isLoading={isLoading}
              />
            </div>
            <div className="list-comments clearfix">
              <MainThread
                issue={issue}
                comments={comments}
                isLoading={isLoading}
                userChecked={userChecked}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// const MainComments = ({
//   comments, issue, getNewUrl, isLoading, arrayUser,
// }) => (
//   <section className="main clearfix">
//     <div className="settings-panel pull-left">
//       <div className="container-settings">
//         <SettingsMain getNewUrl={getNewUrl} isLoading={isLoading} arrayUser={arrayUser} />
//       </div>
//     </div>
//     <div className="content-comments pull-left">
//       <div className="container-thread">
//         <div className="issue-body list-comments clearfix">
//           <TitleComments issue={issue} isLoading={isLoading} />
//         </div>
//         <div className="list-comments clearfix">
//           <MainThread issue={issue} comments={comments} isLoading={isLoading} />
//         </div>
//       </div>
//     </div>
//   </section>
// );

// MainComments.propTypes = {
//   comments: PropTypes.arrayOf(PropTypes.object).isRequired,
//   issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
//   getNewUrl: PropTypes.func.isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   arrayUser: PropTypes.arrayOf(PropTypes.string).isRequired,
// };


export default MainComments;
