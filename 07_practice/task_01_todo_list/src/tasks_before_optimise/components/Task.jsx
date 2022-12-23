import React from 'react';
// import ClassNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ id, done, text, onChange, onDelete }) => {
  // const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;
  // const listItemClasses = ClassNames('list-item', { 'list-item_done': done });

  return (
    <li className={`list-item${done ? ' list-item_done' : ''}`}>
      <input
        type="checkbox"
        // defaultChecked={done}
        checked={done}
        className="list-item__checkbox"
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  done: false,
  text: '',
};

export default Task;
