import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import { connect } from 'react-redux';
import { tasksListSelector } from '../tasks.selectors';
// import {
//   createTask,
//   fetchTasksList,
//   updateTask,
//   deleteTask,
// } from '../tasksGateway';
import * as tasksAction from '../tasks.actions';

class Todolist extends Component {
  // state = {
  //   tasks: [],
  // };

  componentDidMount() {
    this.props.getTaskList();
    // this.fetchTasksList();
  }

  // fetchTasksList = () => {
  //   fetchTasksList().then((tasklist) =>
  //     this.setState({
  //       tasks: tasklist,
  //     })
  //   );
  // };

  // handleTaskStatusChange = (id) => {
  //   // const { tasks } = this.state;
  //   // const { done, text, createDate } = tasks.find((task) => task.id === id);
  //   // const updatedTask = { text, createDate, done: !done };
  //   this.props.updateTask(id);
  // };

  // handleTaskDelete = (id) => {
  //   deleteTask(id).then(this.fetchTasksList);
  // };

  // handleTaskCreate = (text) => {
  //   // const newTask = {
  //   //   text: text,
  //   //   done: false,
  //   //   createDate: new Date().toISOString(),
  //   // };
  //   createTask(newTask).then(this.fetchTasksList);
  // };

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
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Todolist);
