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
          ([
            <input
              id={user}
              type="checkbox"
              onChange={this.handleInputChange}
              value={user}
              checked={!filteredUsers.includes(user)}
            />,
            <label htmlFor={user} key={user}>
              {user}
            </label>]
            ))

           }
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
