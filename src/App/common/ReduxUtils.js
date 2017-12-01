
export function createPayload(type = 'type', payload = {}) {
	return {type, payload};
}

export function createReducer(initialState, objectHandler) {
  return function reducer(state = initialState, action) {
    if (objectHandler.hasOwnProperty(action.type)) {
      return objectHandler[action.type](state, action.payload);

    } else {
      return state;

    }
  }
}