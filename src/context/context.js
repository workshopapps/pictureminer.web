import React, { useContext, useReducer } from 'react';
import { initialState } from './initialState';
import { reducers } from './reducer';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
