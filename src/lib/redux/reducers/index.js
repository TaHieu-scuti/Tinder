import defaultState from '../stateDefinitions';
import SET_HTTP_CLIENT from './setHttpClient';
import LOGOUT from './logout';
import IS_REQUESTING from './isRequesting';
import RAISE_ERROR from './raiseError';

const reducers = {
  SET_HTTP_CLIENT,
  LOGOUT,
  IS_REQUESTING,
  RAISE_ERROR
};

export default (state = defaultState, action = {}) => {
  if (reducers[action.type] === undefined) {
    return state;
  }
  return reducers[action.type](state, action);
};