import DndCharacter from '../../core/dndcharacter';
import { ActionType } from '../types/action-types';
import { CharacterActionConstants, CharacterState } from './types';

export const initialCharacterState: CharacterState = {
	newCharacter: new DndCharacter()
};

export const characterReducer = (
	state: CharacterState = initialCharacterState,
	action: ActionType
): CharacterState => {
	switch (action.type) {
		case CharacterActionConstants.UPDATE_NEW_CHARACTER: {
			return { ...state, newCharacter: action.payload };
		}
		default: {
			return { ...state };
		}
	}
};
