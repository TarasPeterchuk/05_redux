import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User';
import Pagination from './Pagination';
import { goPrevPage, goNextPage } from './users.actions';
import { usersListSelector, cerrentPageSelector } from './users.selectors';

const itemsPerPage = 3;
const UsersList = ({ users, currentPage, goPrev, goNext }) => {
  const start = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(start, start + itemsPerPage);
  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.number.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    users: usersListSelector(state),
    currentPage: cerrentPageSelector(state),
  };
};

const mapDispatch = {
  goPrev: goPrevPage,
  goNext: goNextPage,
};

export default connect(mapState, mapDispatch)(UsersList);
