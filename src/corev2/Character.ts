import { CharacterClass } from './CharacterClasses/CharacterClass';
import { Race } from './Race';

export class Character {
	characterName: string = '';
	race?: Race;
	class?: CharacterClass;
	eyes: string = '';
	skin: string = '';
	hair: string = '';
	avatarImage: string = '';
	factionImage: string = '';
	backstory: string = '';
	height: string = '';
	weight: string = '';
	age: string = '';

	levelUp() {
		// TODO: update level and xp
		// TODO: Notify of new class traits available per level
		// TODO: Recalculate Hp by class hp object
	}

	loadFromSerialize(data: any) {
		for (const [key, val] of Object.entries(data)) {
			//@ts-ignore
			this[key] = val;
		}

		return this;
	}
}
