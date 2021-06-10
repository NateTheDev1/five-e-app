import { useDispatch } from 'react-redux';
import {
	CharacterActionConstants,
	CharacterState,
	UpdateNewCharacter
} from './types';
import { RootActions } from '../types/action-types';

export const CharacterActions: RootActions['character'] = {
	useUpdateNewUser() {
		const dispatch = useDispatch();

		return (newCharacter: CharacterState['newCharacter']) => {
			const action: UpdateNewCharacter = {
				type: CharacterActionConstants.UPDATE_NEW_CHARACTER,
				payload: newCharacter
			};

			dispatch(action);
		};
	}
};
