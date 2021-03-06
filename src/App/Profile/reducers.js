import { createPayload, createReducer } from 'App/common/ReduxUtils';

// import service

export const storeName = 'user';

// define action type
export const actionTypes = {
  update_info: `${storeName}_update_info`,
};

const updateInfo = (info) => (dispatch) => {
  dispatch(createPayload(actionTypes.update_info, info));
};

// conveniently export actions
export const actions = {
  updateInfo,
};

export const initialState = {
  id: 1,
  firstName: 'frog',
  lastName: 'crazy',
  role: 'normal',
  emailAddress: 'frog_crazy@mail.mail',
};

export default createReducer(initialState, {
  [actionTypes.update_info] : (state, payload) => {
    return {
      ...payload,
    };
  }
});