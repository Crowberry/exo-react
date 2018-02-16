import React from 'react';
import PropTypes from 'prop-types';

class UserFilter extends React.Component {
 handleInputChange= (event) => {
   this.props.onFilteredUsersChange(event.target.value);
 }

 render() {
   const {
     users,
     filteredUsers,
   } = this.props;


   return (
     <div>
       <form className="userFilter">
         <p>Masquer un participant</p>

         {users.map(user =>
          (
            <div key={user}>
              <input
                id={user}
                type="checkbox"
                onChange={this.handleInputChange}
                value={user}
                checked={!filteredUsers.includes(user)}
              />
              <label htmlFor={user} >
                {user}
              </label>
            </div>
            ))}
       </form>

     </div>
   );
 }
}


UserFilter.propTypes = {
  onFilteredUsersChange: PropTypes.func.isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  // filteredUsers: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserFilter;
