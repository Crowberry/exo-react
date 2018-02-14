import React from 'react';
import PropTypes from 'prop-types';

class UserFilter extends React.Component {
  static propTypes = { arrayUser: PropTypes.arrayOf(PropTypes.string).isRequired }

  state = { userChecked: [], arrayUser: this.props.arrayUser }

  handleCheckBox = (event) => {
    const userValue = event.target.value;
    if (!this.state.userChecked.includes(userValue)) {
      this.state.userChecked.push(userValue);
      // console.log('add ', this.state.userChecked);
    } else {
      const newUserChecked = this.state.userChecked.filter(value => value !== userValue);
      // this.setState(({ userChecked }) => ({
      //   userChecked: userChecked.filter(value => value !== userValue),
      // }));
      this.setState({ userChecked: newUserChecked });
      // this.state.userChecked = this.state.userChecked.filter(value => value !== userValue);
      // console.log('remove ', this.state.userChecked);
    }

    // console.log(this.state.userChecked);
    this.props.checkUser(this.state.userChecked);
  }

  render() {
    const { arrayUser } = this.state;


    return (
      <div>
        <h1>hide Thread</h1>
        {
          arrayUser.map(element =>
            (
              <label htmlFor={element} key={element}>
                {element}
                <input
                  id={element}
                  type="checkbox"
                  onChange={this.handleCheckBox}
                  value={element}
                />
              </label>
            ))
        }
      </div>
    );
  }
}


UserFilter.propTypes = {
  arrayUser: PropTypes.arrayOf(PropTypes.string).isRequired,
  checkUser: PropTypes.func.isRequired,
};
export default UserFilter;
