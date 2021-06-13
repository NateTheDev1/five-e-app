import { CharacterClass } from './CharacterClasses/CharacterClass';
import { Race } from './Race';

export class Character {
	characterName: string = '';
	race?: Race;
	class?: CharacterClass;

	levelUp() {
		// TODO: update level and xp
		// TODO: Notify of new class traits available per level
		// TODO: Recalculate Hp by class hp object
	}
}
