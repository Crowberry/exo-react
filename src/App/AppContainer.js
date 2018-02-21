import { compose, withState, withProps, lifecycle } from 'recompose';
import fetchApiURl from '../components/_functions/callApi';
import filterComments from '../components/_functions/filterComments';
import sortLoginUser from '../components/_functions/sortLoginUser';

function componentWillMount() {
  fetchApiURl(this.props.urlApi)
    .then((response) => {
      this.props.setData(response);
      this.props.setIsLoading(false);
    });
}

const enhance = compose(
  withState('urlApi', 'setUrlApi', 'https://api.github.com/repos/nodejs/node/issues/6867'),
  withState('data', 'setData', {}),
  withState('isLoading', 'setIsLoading', true),
  withState('filteredUsers', 'setFilteredUsers', []),
  withProps(props => ({
    users: props.isLoading ?
      [] : sortLoginUser(props.data.comments, props.data.issue),
    filteredComments: props.isLoading ?
      {} : filterComments(props.data.comments, props.filteredUsers),
  })),
  lifecycle({
    componentWillMount,
  }),
);

export default enhance;
