import { CharacterActions } from '../Character/types';
import { UserActions } from '../User/types';

export type ActionType = { type: string; payload: any };

export type RootActions = {
	user: UserActions;
	character: CharacterActions;
};
