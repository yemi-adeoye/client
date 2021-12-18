import { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, DELETE_ALERT, TOGGLE_LOADING } from './types';
import { v4 as uuidv4 } from 'uuid';

const AlertState = (props) => {
  const initialState = {
    alerts: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    const id = uuidv4();
    const payload = { id, msg, type };
    dispatch({ payload, type: SET_ALERT });
  };

  const deleteAlert = (id) => {
    const newState = state.alerts.filter((alert) => {
      return alert.id !== id;
    });
    const payload = newState;
    dispatch({ payload, type: DELETE_ALERT });
  };

  const toggleLoading = () => {
    dispatch({ type: TOGGLE_LOADING });
  };

  const { alerts, loading } = state;

  return (
    <AlertContext.Provider
      value={{ alerts, setAlert, deleteAlert, toggleLoading, loading }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
