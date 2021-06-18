import { useSelector } from 'react-redux';
import { RootSelectors } from '../types/selector-types';
import { RootState } from '../types/state-types';

export const CharacterSelectors: RootSelectors['character'] = {
	useSelectNewCharacter: () => {
		const newCharacter = useSelector(
			(state: RootState) => state.character.newCharacter
		);

		return newCharacter;
	}
};
