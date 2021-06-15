import { Barbarian } from './CharacterClasses/Barbarian';
import { Bard } from './CharacterClasses/Bard';
import { CharacterClass } from './CharacterClasses/CharacterClass';
import { Cleric } from './CharacterClasses/Cleric';
import { Druid } from './CharacterClasses/Druid';
import { Fighter } from './CharacterClasses/Fighter';
import { Monk } from './CharacterClasses/Monk';
import { Paladin } from './CharacterClasses/Paladin';
import { Ranger } from './CharacterClasses/Ranger';
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
	StatConstants,
	Race
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
			'Paladin',
			'Ranger'
		];
	}

	static classes = {
		barbarian: new Barbarian(),
		bard: new Bard(),
		cleric: new Cleric(),
		druid: new Druid(),
		fighter: new Fighter(),
		monk: new Monk(),
		paladin: new Paladin(),
		ranger: new Ranger()
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

	getRaces() {
		return races;
	}

	getRace(name: string): Race {
		const races = Object.create({
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
		});

		return races[name];
	}
}

export const core = new Core();

export const races: { [key: string]: Race } = {
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

export const classes: { [key: string]: CharacterClass } = {
	barbarian: new Barbarian(),
	bard: new Bard(),
	cleric: new Cleric(),
	druid: new Druid(),
	fighter: new Fighter(),
	monk: new Monk(),
	paladin: new Paladin(),
	ranger: new Ranger()
};

export const SkillConstants = {
	acrobatics: 'Acrobatics',
	animalHandling: 'Animal Handling',
	arcana: 'Arcana',
	athletics: 'Athletics',
	deception: 'Deception',
	history: 'History',
	insight: 'Insight',
	intimidation: 'Intimidation',
	investigation: 'Investigation',
	medicine: 'Medicine',
	nature: 'Nature',
	perception: 'Perception',
	performance: 'Performance',
	persuasion: 'Persuasion',
	religion: 'Religion',
	sleightOfHand: 'Sleight of Hand',
	stealth: 'Stealth',
	survival: 'Survival'
};

export const instruments = {
	bagpipes: 'Bagpipes',
	drum: 'Drum',
	dulcimer: 'Dulcimer',
	flute: 'Flute',
	horn: 'Horn',
	lute: 'Lute',
	lyre: 'Lyre',
	panFlute: 'Pan Flute',
	shawm: 'Shawm',
	Viol: 'Viol'
};
