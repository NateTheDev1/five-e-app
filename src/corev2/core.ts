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

	public dX(x: number) {
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

export const alignments: { title: string; description: string }[] = [
	{
		title: 'None',
		description: 'No alignment'
	},
	{
		title: 'Lawful Good',
		description: `Lawful good (LG) creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good.`
	},
	{
		title: 'Neutral Good',
		description: `Neutral good (NG) folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good.`
	},
	{
		title: 'Chaotic Good',
		description: `Chaotic good (CG) creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good.`
	},
	{
		title: 'Lawful Neutral',
		description: `Lawful neutral (LN) individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral.`
	},
	{
		title: 'True Neutral',
		description: `Neutral (N) is the alignment of those who prefer to steer clear of moral questions and don't take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral.`
	},
	{
		title: 'Chaotic Neutral',
		description: `Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.`
	},
	{
		title: 'Lawful Evil',
		description: `Lawful evil (LE) creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil.`
	},
	{
		title: 'Neutral Evil',
		description: `Neutral evil (NE) is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and goblins are neutral evil.`
	},
	{
		title: 'Chaotic Evil',
		description: `Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.`
	}
];

export const lifestyles: { title: string; description: string }[] = [
	{
		title: 'None',
		description: 'No lifestyle'
	},
	{
		title: 'Wretched',
		description:
			'You live in inhumane conditions. With no place to call home, you shelter wherever you can, sneaking into barns, huddling in old crates, and relying on the good graces of people better off than you. A wretched lifestyle presents abundant dangers. Violence, disease, and hunger follow you wherever you go. Other wretched people covet your armor, weapons, and adventuring gear, which represent a fortune by their standards. You are beneath the notice of most people.'
	},
	{
		title: 'Squalid (1SP a day)',
		description:
			'You live in a leaky stable, a mud-floored hut just outside town, or a vermin-infested boarding house in the worst part of town. You have shelter from the elements, but you live in a desperate and often violent environment, in places rife with disease, hunger, and misfortune. You are beneath the notice of most people, and you have few legal protections. Most people at this lifestyle level have suffered some terrible setback. They might be disturbed, marked as exiles, or suffer from disease.'
	},
	{
		title: 'Poor (2SP a day)',
		description:
			'A poor lifestyle means going without the comforts available in a stable community. Simple food and lodgings, threadbare clothing, and unpredictable conditions result in a sufficient, though probably unpleasant, experience. Your accommodations might be a room in a flophouse or in the common room above a tavern. You benefit from some legal protections, but you still have to contend with violence, crime, and disease. People at this lifestyle level tend to be unskilled laborers, costermongers, peddlers, thieves, mercenaries, and other disreputable types.'
	},
	{
		title: 'Modest (1GP a day)',
		description: `A modest lifestyle keeps you out of the slums and ensures that you can maintain your equipment. You live in an older part of town, renting a room in a boarding house, inn, or temple. You don't go hungry or thirsty, and your living conditions are clean, if simple. Ordinary people living modest lifestyles include soldiers with families, laborers, students, priests, hedge wizards, and the like.`
	},
	{
		title: 'Comfortable (2GP a day)',
		description: `Choosing a comfortable lifestyle means that you can afford nicer clothing and can easily maintain your equipment. You live in a small cottage in a middle-class neighborhood or in a private room at a fine inn. You associate with merchants, skilled tradespeople, and military officers.`
	},
	{
		title: 'Wealthy (4GP a day)',
		description: `Choosing a wealthy lifestyle means living a life of luxury, though you might not have achieved the social status associated with the old money of nobility or royalty. You live a lifestyle comparable to that of a highly successful merchant, a favored servant of the royalty, or the owner of a few small businesses. You have respectable lodgings, usually a spacious home in a good part of town or a comfortable suite at a fine inn. You likely have a small staff of servants.`
	},
	{
		title: 'Aristocratic (10GP minimum a day)',
		description: `You live a life of plenty and comfort. You move in circles populated by the most powerful people in the community. You have excellent lodgings, perhaps a townhouse in the nicest part of town or rooms in the finest inn. You dine at the best restaurants, retain the most skilled and fashionable tailor, and have servants attending to your every need. You receive invitations to the social gatherings of the rich and powerful, and spend evenings in the company of politicians, guild leaders, high priests, and nobility. You must also contend with the highest levels of deceit and treachery. The wealthier you are, the greater the chance you will be drawn into political intrigue as a pawn or participant.`
	}
];
