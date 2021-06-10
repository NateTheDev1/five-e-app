import { UserActionConstants, UserState } from './types';
import { ActionType } from '../types/action-types';

export const initialUserState: UserState = {
	authenticated: localStorage.getItem(
		process.env.REACT_APP_TOKEN_KEY as string
	)
		? true
		: false,
	token:
		localStorage.getItem(process.env.REACT_APP_TOKEN_KEY as string) ?? '',
	userId: undefined,
	user: undefined,
	loading: false
};

export const userReducer = (
	state: UserState = initialUserState,
	action: ActionType
): UserState => {
	switch (action.type) {
		case UserActionConstants.USER_LOGGED_IN: {
			return {
				...state,
				authenticated: true,
				token: action.payload,
				loading: false
			};
		}
		case UserActionConstants.APP_FETCHED_USER: {
			return {
				...state,
				user: action.payload,
				userId: action.payload.id,
				loading: false
			};
		}
		case UserActionConstants.SET_LOADING: {
			return { ...state, loading: action.payload };
		}
		case UserActionConstants.USER_LOGGED_OUT: {
			return { ...initialUserState };
		}
		default: {
			return { ...state };
		}
	}
};
