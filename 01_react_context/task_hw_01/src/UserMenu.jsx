import React from 'react';
import { ThemeContext } from './themes-context';

class UserMenu extends React.Component {
  render() {
    // console.log(this.context);
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
      />
    );
  }
}

UserMenu.contextType = ThemeContext;

export default UserMenu;
