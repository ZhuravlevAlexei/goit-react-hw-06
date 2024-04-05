import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  // filter: filtersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
