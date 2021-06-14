import { Barbarian } from './CharacterClasses/Barbarian';
import { Bard } from './CharacterClasses/Bard';
import { Cleric } from './CharacterClasses/Cleric';
import { Druid } from './CharacterClasses/Druid';
import { Fighter } from './CharacterClasses/Fighter';
import { Monk } from './CharacterClasses/Monk';
import { Paladin } from './CharacterClasses/Paladin';
import {
	Dragonborn,
	Eladrin,
	HillDwarf,
	HighElf,
	MountainDwarf,
	WoodElf,
	HalfElf,
	HalfOrc,
	LightfootHalfling,
	StoutHalfling,
	Human,
	RockGnome,
	Tiefling,
	StatConstants
} from './Race';

export class Core {
	static get availableClasses(): string[] {
		return [
			'Barbarian',
			'Bard',
			'Cleric',
			'Druid',
			'Fighter',
			'Monk',
			'Paladin'
		];
	}

	classes = {
		barbarian: new Barbarian(),
		bard: new Bard(),
		cleric: new Cleric(),
		druid: new Druid(),
		fighter: new Fighter(),
		monk: new Monk(),
		paladin: new Paladin()
	};

	static get availableRaces(): string[] {
		return [
			'Dragonborn',
			'Hill Dwarf',
			'Mountain Dwarf',
			'Eladrin',
			'High Elf',
			'Woof Elf',
			'Half-Elf',
			'Half-Orc',
			'Lightfoot Halfling',
			'Stout Halfling',
			'Human',
			'Rock Gnome',
			'Tiefling'
		];
	}

	races = {
		dragonborn: new Dragonborn(),
		hilldwarf: new HillDwarf(),
		mountaindwarf: new MountainDwarf(),
		eladrin: new Eladrin(),
		highelf: new HighElf(),
		woodelf: new WoodElf(),
		halfelf: new HalfElf(),
		halforc: new HalfOrc(),
		lightfoothalfling: new LightfootHalfling(),
		stouthalfling: new StoutHalfling(),
		human: new Human(),
		rockgnome: new RockGnome(),
		tiefling: new Tiefling()
	};

	static get stats(): string[] {
		return [
			StatConstants.Constitution,
			StatConstants.Strength,
			StatConstants.Charisma,
			StatConstants.Dexterity,
			StatConstants.Intelligence,
			StatConstants.Wisdom
		];
	}
}
