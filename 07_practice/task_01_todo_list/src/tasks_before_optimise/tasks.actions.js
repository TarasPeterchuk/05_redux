import { tasksListSelector } from './tasks.selectors';
import * as taskGateway from './tasksGateway';

export const TASK_LIST_RECEIVED = 'TASK_LIST_RECEIVED';

export const tasksListReceived = (tasksList) => {
  const action = {
    type: TASK_LIST_RECEIVED,
    payload: { tasksList },
  };
  return action;
};

export const getTaskList = () => {
  const thunkAction = function (dispatch) {
    taskGateway
      .fetchTasksList()
      .then((tasksList) => dispatch(tasksListReceived(tasksList)));
  };
  return thunkAction;
};

export const updateTask = (taskId) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    // const { tasks } = this.state;
    const task = tasksList.find((task) => task.id === taskId);
    const updatedTask = { ...task, done: !task.done };

    taskGateway
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const deleteTask = (taskId) => {
  const thunkAction = function (dispatch) {
    taskGateway.deleteTask(taskId).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const createTask = (text) => {
  const thunkAction = function (dispatch) {
    const taskData = {
      text: text,
      done: false,
      createdAt: new Date().toISOString(),
    };

    taskGateway.createTask(taskData).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};
