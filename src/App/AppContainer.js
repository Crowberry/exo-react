import {
  compose,
  withState,
  withProps,
  lifecycle,
  withHandlers,
  onlyUpdateForKeys,
} from 'recompose';
import fetchApiUrl from '../functions/callApi';
import filterComments from '../functions/filterComments';
import sortLoginUser from '../functions/sortLoginUser';
import App from './App';


const getNewUrl = ({ setUrlApi }) => (dataFromUrlInput) => {
  setUrlApi(dataFromUrlInput);
};

function componentWillMount() {
  fetchApiUrl(this.props.urlApi)
    .then((response) => {
      this.props.setData(response);
      this.props.setIsLoading(false);
    });
}

function componentWillUpdate(nextProps) {
  if (this.props.urlApi !== nextProps.urlApi) {
    this.props.setIsLoading(true);
    fetchApiUrl(nextProps.urlApi)
      .then((response) => {
        this.props.setData(response);
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


const enhance = compose(
  onlyUpdateForKeys(['urlApi']),
  withState('urlApi', 'setUrlApi', 'https://api.github.com/repos/Crowberry/exo-react/issues/26'),
  withState('data', 'setData', {}),
  withState('isLoading', 'setIsLoading', true),
  withState('filteredUsers', 'setFilteredUsers', []),
  withProps(props => ({
    users: props.isLoading ?
      [] : sortLoginUser(props.data.comments, props.data.issue),
    filteredComments: props.isLoading ?
      [] : filterComments(props.data.comments, props.filteredUsers),
  })),
  withHandlers({ getNewUrl, onFilteredUsersChange }),
  lifecycle({
    componentWillMount,
    componentWillUpdate,
  }),
);

export default enhance(App);
