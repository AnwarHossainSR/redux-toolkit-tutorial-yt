import axios from 'axios';
import {toast} from 'react-toastify';

import {getReadableFormate} from '../../utils/helper';
import {addTask, getTaskLoading, getTasks} from '../reducers/tasksReducer';

export const getTasksAction = () => async (dispatch) => {
  getTaskLoading();
  try {
    const res = await axios.get('/tasks');
    const filteredDate = getReadableFormate(res.data);
    dispatch(getTasks(filteredDate));
  } catch (err) {
    toast(err, {
      type : 'error',
    });
  }
};

export const addTaskAction = (task) => async (dispatch) => {
  try {
    const res = await axios.post('/tasks', task);
    dispatch(addTask(res.data));
    toast('Task added successfully', {
      type : 'success',
    });
  } catch (err) {
    toast(err, {
      type : 'error',
    });
  }
};
