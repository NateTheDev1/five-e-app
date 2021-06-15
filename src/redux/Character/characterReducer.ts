import { Character } from '../../corev2/Character';
import { ActionType } from '../types/action-types';
import { CharacterActionConstants, CharacterState } from './types';

export const initialCharacterState: CharacterState = {
	newCharacter: localStorage.getItem('characterInProgress')
		? new Character().loadFromSerialize(
				JSON.parse(localStorage.getItem('characterInProgress') as any)
		  )
		: new Character()
};

export const characterReducer = (
	state: CharacterState = initialCharacterState,
	action: ActionType
): CharacterState => {
	switch (action.type) {
		case CharacterActionConstants.UPDATE_NEW_CHARACTER: {
			localStorage.setItem(
				'characterInProgress',
				JSON.stringify(action.payload)
			);
			return { ...state, newCharacter: action.payload };
		}
		default: {
			return { ...state };
		}
	}
};
