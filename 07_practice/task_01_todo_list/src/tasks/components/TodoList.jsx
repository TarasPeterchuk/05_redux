import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import { connect } from 'react-redux';
import { sortedTasksListSelector } from '../tasks.selectors';
import * as tasksAction from '../tasks.actions';

class Todolist extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <div className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTask}
            handleTaskDelete={this.props.deleteTask}
          />
        </div>
      </>
    );
  }
}

Todolist.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  getTaskList: tasksAction.getTaskList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = (state) => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Todolist);
