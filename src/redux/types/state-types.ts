import { CharacterState } from '../Character/types';
import { UserState } from '../User/types';

export interface RootState {
	user: UserState;
	character: CharacterState;
}
