import Constants from './constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.REQUEST_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.GET_EVENTS_ENDS]: (state, action) => {
      return {
        ...state,
        fetch: false,
        events : action.payload,
      };
    },
  },
  initialState = { };

export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
