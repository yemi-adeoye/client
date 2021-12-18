import { SET_ALERT, DELETE_ALERT, TOGGLE_LOADING } from './types';
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, alerts: [...state.alerts, action.payload] };

    case DELETE_ALERT:
      return { ...state, alerts: action.payload };

    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };

    default:
      return state;
  }
};
