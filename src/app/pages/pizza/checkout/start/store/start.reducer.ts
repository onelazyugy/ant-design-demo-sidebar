import * as StartActions from './start.action';

// clear all store upon completed payment....will be similar when use logout
export function clearState(reducer) {
    return function (state, action) {
  
      if (action.type === StartActions.RESET_STORE) {
        state = undefined;
      }
  
      return reducer(state, action);
    };
  }