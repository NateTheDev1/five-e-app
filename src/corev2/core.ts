import { Acolyte } from './Backgrounds/Acolyte';
import { CharacterBackground } from './Backgrounds/CharacterBackgrounds';
import { Criminal } from './Backgrounds/Criminal';
import { FolkHero } from './Backgrounds/FolkHero';
import { HauntedOne } from './Backgrounds/HauntedOne';
import { Noble } from './Backgrounds/Noble';
import { Sage } from './Backgrounds/Sage';
import { Soldier } from './Backgrounds/Soldier';
import { Barbarian } from './CharacterClasses/Barbarian';
import { Bard } from './CharacterClasses/Bard';
import { CharacterClass } from './CharacterClasses/CharacterClass';
import { Cleric } from './CharacterClasses/Cleric';
import { Druid } from './CharacterClasses/Druid';
import { Fighter } from './CharacterClasses/Fighter';
import { Monk } from './CharacterClasses/Monk';
import { Paladin } from './CharacterClasses/Paladin';
import { Ranger } from './CharacterClasses/Ranger';
import { Rogue } from './CharacterClasses/Rogue';
import { Sorcerer } from './CharacterClasses/Sorcerer';
import { Warlock } from './CharacterClasses/Warlock';
import { Wizard } from './CharacterClasses/Wizard';
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
			'Ranger',
			'Rogue',
			'Sorcerer',
			'Warlock',
			'Wizard'
		];
	}

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

	static get availableBackgroundes(): string[] {
		return [
			'Acolyte',
			'Criminal',
			'Folk Hero',
			'Haunted One',
			'Noble',
			'Sage',
			'Soldier'
		];
	}

	public static d6() {
		// D6 roll
		return Math.floor(Math.random() * 6) + 1;
	}

	public static dX(x: number) {
		// DX roll
		return Math.floor(Math.random() * x) + 1;
	}

	public static statRoll(): number {
		// Standard stat roll: 4d6, subtract lowest, get total of remaining
		var diceArray = [...new Array(4)]
			.map(() => this.d6())
			.sort((a, b) => a - b)
			.reverse();
		diceArray.pop();
		return diceArray.reduce((a, b) => a + b, 0);
	}

	public standardStatArray: number[] = [15, 14, 13, 12, 10, 8];
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
	ranger: new Ranger(),
	rogue: new Rogue(),
	sorcerer: new Sorcerer(),
	warlock: new Warlock(),
	wizard: new Wizard()
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

export const backgrounds: { [key: string]: CharacterBackground } = {
	acolyte: new Acolyte(),
	criminal: new Criminal(),
	folkhero: new FolkHero(),
	hauntedone: new HauntedOne(),
	noble: new Noble(),
	sage: new Sage(),
	soldier: new Soldier()
};

export const alignments = [
	'Lawful Good',
	'Neutral Good',
	'Chaotic Good',
	'Lawful Neutral',
	'True Neutral',
	'Chaotic Neutral',
	'Lawful Evil',
	'Neutral Evil',
	'Chaotic Evil'
];
