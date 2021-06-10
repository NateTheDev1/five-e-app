import { UserSelectors } from '../User/types';
import { CharacterSelectors } from '../Character/types';

export type RootSelectors = {
	user: UserSelectors;
	character: CharacterSelectors;
};
