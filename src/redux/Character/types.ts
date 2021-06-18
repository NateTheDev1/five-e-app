import { Character } from '../../corev2/Character';

// STATE

export type CharacterState = {
	newCharacter: Character | undefined;
};

// ACTIONS

export enum CharacterActionConstants {
	UPDATE_NEW_CHARACTER = 'UPDATE_NEW_CHARACTER'
}

export interface UpdateNewCharacter {
	type: CharacterActionConstants.UPDATE_NEW_CHARACTER;
	payload: CharacterState['newCharacter'];
}

export type CharacterActions = {
	useUpdateNewCharacter(): (
		newCharacter: CharacterState['newCharacter']
	) => void;
};

// SELECTORS

export type CharacterSelectors = {
	useSelectNewCharacter: () => CharacterState['newCharacter'];
};
