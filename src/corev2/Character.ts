import { CharacterClass } from './CharacterClasses/CharacterClass';
import { Race, StatBonus } from './Race';

export class Character {
	characterName: string = '';
	avatarImage: string = '';
	factionImage: string = '';

	race?: Race;
	class?: CharacterClass;

	languages: string[] = [];
	bonuses: StatBonus[] = [];
	level: number = 1;
	xp: number = 0;
	proficiencies: string[] = [];
	inventory: { name: string; quantity: number }[] = [];

	eyes: string = 'Blue';
	skin: string = 'Brown';
	hair: string = 'Black';

	backstory: string = '';
	height: string = '';
	weight: string = '';
	age: string = '21';
	alignment: string = '';
	gender: string = '';
	personalityTraits: string = '';
	ideals: string = '';
	bonds: string = '';
	flaws: string = '';
	faith: string = '';
	lifestyle: string = '';
	backgroundFeatures: string[] = [];

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
