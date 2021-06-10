import { combineReducers } from 'redux';
import { characterReducer } from './Character/characterReducer';
import { userReducer } from './User/userReducer';

export const allReducers = combineReducers({
	user: userReducer,
	character: characterReducer
});
