import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducers';

export default combineReducers ({
    libraries: LibraryReducer
});