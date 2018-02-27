import {
  compose,
  withState,
  withProps,
  lifecycle,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { fetchApiUrl, callApi } from '../functions/callApi';
import filterComments from '../functions/filterComments';
import sortLoginUser from '../functions/sortLoginUser';
import App from './App';


const getNewUrl = ({ setUrlApi }) => (dataFromUrlInput) => {
  setUrlApi(dataFromUrlInput);
};

function componentWillMount() {
  this.props.loadData(this.props.urlApi).then(() => {
    console.log('toto');
    this.props.setIsLoading(false);
  });
}

function componentWillUpdate(nextProps) {
  if (this.props.urlApi !== nextProps.urlApi) {
    this.props.setIsLoading(true);
    fetchApiUrl(nextProps.urlApi)
      .then((response) => {
        this.props.setIssue(response.issue);
        this.props.setComments(response.comments);
        this.props.setIsLoading(false);
      });
  }
}

const onFilteredUsersChange = ({ filteredUsers, setFilteredUsers }) => (changedUsers) => {
  // case user add in filteredUser
  // check if user isn't already in filteredUser
  if (!filteredUsers.includes(changedUsers)) {
    setFilteredUsers([...filteredUsers, changedUsers]);
  } else {
    // case user remove in filteredUser
    // Check if user is in filteredUser
    setFilteredUsers(filteredUsers.filter(item => item !== changedUsers));
  }
};

const onAddNewComment = ({ issue, setComments }) => () => {
  callApi(issue.comments_url)
    .then((response) => {
      setComments(response);
    });
};

const mapStateToProps = state => ({
  data: state.data,
  issue: state.issue,
  comments: state.comments,
  urlApi: state.urlApi,
  isLoading: true,
});

const mapDispatchToProps = dispatch => ({
  loadData: urlApi => fetchApiUrl(urlApi)
    .then((data) => {
      dispatch({
        type: 'DATA_RECEIVED',
        data,
      });
    }).then((data) => {
      dispatch({
        type: 'ISSUE_RECEIVED',
        issue: data,
      });
      dispatch({
        type: 'COMMENTS_RECEIVED',
        comments: data,
      });
    }),
});

const withConnectApp = connect(mapStateToProps, mapDispatchToProps);


const enhance = compose(
  withConnectApp,
  withState('isLoading', 'setIsLoading', true),
  // withState('issue', 'setIssue', {}),
  // withState('comments', 'setComments', {}),
  // onlyUpdateForKeys(['urlApi']),
  // withState('urlApi', 'setUrlApi', 'https://api.github.com/repos/Crowberry/exo-react/issues/26'),
  withState('filteredUsers', 'setFilteredUsers', []),
  withProps(props => ({
    users: props.isLoading ?
      [] : sortLoginUser(props.comments, props.issue),
    filteredComments: props.isLoading ?
      [] : filterComments(props.comments, props.filteredUsers),
  })),
  withHandlers({ getNewUrl, onFilteredUsersChange, onAddNewComment }),
  lifecycle({
    componentWillMount,
    componentWillUpdate,
  }),
);

export default enhance(App);
