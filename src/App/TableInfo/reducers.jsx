/**
 * Created by linhv on 12/1/2017.
 */
import {createPayload, createReducer} from 'App/common/ReduxUtils';

// import service

export const storeName = 'user';

// define action type
export const actionTypes = {
  update_info: `${storeName}_update_info`,
};

const updateInfo = (info) => {
  console.log(info);
};

// conveniently export actions
export const actions = {
  updateInfo,
};

export const initialState = {
  list: [{
    firstName: 'frog',
    lastName: 'crazy',
    role: 'normal',
    emailAddress: 'frog_crazy@mail.mail',
  }]
};

export default createReducer(initialState, {});