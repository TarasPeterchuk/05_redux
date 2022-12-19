import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <Pagination
          goPrev={this.props.prevPage}
          goNext={this.props.nextPage}
          currentPage={this.props.currentPage}
          totalItems={users.length}
          itemsPerPage={3}
        />
        <ul className="users" onClick={this.props.fillUsers}>
          {users
            .filter(
              (user, index) =>
                index >= this.props.currentPage * 3 &&
                index < this.props.currentPage * 3 + 3
            )
            .map((user) => (
              <User key={user.id} {...user} />
            ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = {
  prevPage: userActions.prevPage,
  nextPage: userActions.nextPage,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
