import { compose, withProps, setPropTypes, onlyUpdateForPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import UserFilter from './UserFilter';

const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    onFilteredUsersChange: PropTypes.func.isRequired,
    filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
    users: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  withProps(({ onFilteredUsersChange }) => ({
    handleInputChange: event => onFilteredUsersChange(event.target.value),
  })),

);

export default enhance(UserFilter);
