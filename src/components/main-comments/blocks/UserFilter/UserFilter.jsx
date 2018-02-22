import React from 'react';
import PropTypes from 'prop-types';
import UserFilterStyle from './UserFilterStyle';

const UserFilter = ({ users, filteredUsers, handleInputChange }) => (
  <div>
    <UserFilterStyle className="userFilter">
      <p className="bold">Masquer un participant</p>

      {users.map(user =>
          (
            <div key={user}>
              <input
                id={user}
                type="checkbox"
                onChange={handleInputChange}
                value={user}
                checked={!filteredUsers.includes(user)}
              />
              <label htmlFor={user} >
                {user}
              </label>
            </div>
            ))}
    </UserFilterStyle>

  </div>
);

UserFilter.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserFilter;
