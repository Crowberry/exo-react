import React from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import MainThread from './main-comments/MainThread';
import SettingsMain from './main-comments/SettingsMain';

class MainComments extends React.Component {
  static propTypes = {
    issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    getNewUrl: PropTypes.func.isRequired,
  }

  state = {
    userChecked: [],
  }

  checkUser = (dataFromCheck) => {
    this.setState({
      userChecked: dataFromCheck,
    });
  }

  render() {
    const { userChecked } = this.state;

    const {
      issue, comments, isLoading, getNewUrl,
    } = this.props;

    return (
      <section className="main clearfix">
        <div className="settings-panel pull-left">
          <div className="container-settings">
            <SettingsMain
              getNewUrl={getNewUrl}
              isLoading={isLoading}
              issue={issue}
              comments={comments}
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
