import {
	Darkvision,
	DwarvenCombatTraining,
	DwarvenResillience,
	FeyAncestry,
	FeyStep,
	KeenSenses,
	Stonecutting,
	Trance
} from './DB';

export enum StatConstants {
	Strength = 'Strength',
	Charisma = 'Charisma',
	Constitution = 'Constitution',
	Dexterity = 'Dexterity',
	Intelligence = 'Intelligence',
	Wisdom = 'Wisdom'
}

export enum LanguageConstants {
	Dwarvish = 'Dwarvish',
	Common = 'Common',
	Elvish = 'Elvish',
	Giant = 'Giant',
	Gnomish = 'Gnomish',
	Goblin = 'Goblin',
	Halfling = 'Halfing',
	Orc = 'Orc',
	Draconic = 'Draconic'
}

export interface StatBonus {
	amount: number;
	stat: StatConstants;
}

export interface Trait {
	title: string;
	description: string;
	choose?: {
		num: number;
		[key: string]: any;
	};
	increase?: {
		num: number;
		type: string;
	};
	increaseByLevel?: {
		num: number;
		increment: number;
		type: string;
	};
}

export class Race {
	public name: string = '';
	public description: string = '';
	public traits: Trait[] = [];
	public traitDescription: string = '';
	public bonuses: StatBonus[] = [];
	public resistences: string[] = [];
	public proficiencies: string[] = [];
	public languages: string[] = [];
	public abilityIncrease?: {
		increase: number;
		all: boolean;
		abilities: any[];
	};
	public extraLanguage?: {
		all: boolean;
		languages: any[];
		choose: number;
	};
	public extraBonuses?: {
		all: boolean;
		stats: any[];
		choose: number;
		increase: number;
	};
	public extraProficiencies?: {
		all: boolean;
		choose: number;
		skills: any[];
	};
	public cantrips?: string[] = [];
}

export class Dragonborn extends Race {
	constructor() {
		super();
		this.name = 'Dragonborn';
		this.description =
			'Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.';
		this.traits = [
			{
				title: 'Breath Weapon',
				description:
					'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.'
			},
			{
				title: 'Draconic Ancestry',
				description:
					'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.',
				choose: {
					num: 1,
					dragons: [
						{
							dragonName: 'black',
							damageType: 'Acid',
							breathWeapon: '5 by 30 ft. line (Dex. save)'
						},
						{
							dragonName: 'Blue',
							damageType: 'Lightning',
							breathWeapon: '5 by 30 ft. line (Dex. save)'
						},
						{
							dragonName: 'Brass',
							damageType: 'Fire',
							breathWeapon: '5 by 30 ft. line (Dex. save)'
						},
						{
							dragonName: 'Bronze',
							damageType: 'Lightning',
							breathWeapon: '5 by 30 ft. line (Dex. save)'
						},
						{
							dragonName: 'Copper',
							damageType: 'Acid',
							breathWeapon: '5 by 30 ft. line (Dex. save)'
						},
						{
							dragonName: 'Gold',
							damageType: 'Fire',
							breathWeapon: '15 ft. cone (Dex. save)'
						},
						{
							dragonName: 'Green',
							damageType: 'Poison',
							breathWeapon: '15 ft. cone (Con. save)'
						},
						{
							dragonName: 'Red',
							damageType: 'Fire',
							breathWeapon: '15 ft. cone (Dex. save)'
						},
						{
							dragonName: 'Silver',
							damageType: 'Cold',
							breathWeapon: '15 ft. cone (Con. save)'
						},
						{
							dragonName: 'White',
							damageType: 'Cold',
							breathWeapon: '15 ft. cone (Con. save)'
						}
					]
				}
			},
			{
				title: 'Damage Resistence',
				description:
					'You have resistance to the damage type associated with your draconic ancestry.'
			}
		];
		this.traitDescription =
			'+2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance';
		this.bonuses = [
			{ amount: 2, stat: StatConstants.Strength },
			{ amount: 1, stat: StatConstants.Charisma }
		];
		this.languages = [LanguageConstants.Draconic, LanguageConstants.Common];
	}
}

export class HillDwarf extends Race {
	constructor() {
		super();

		this.name = 'Hill Dwarf';
		this.description =
			'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.';
		this.traits = [
			Darkvision,
			DwarvenResillience,
			DwarvenCombatTraining,
			{
				title: 'Tool Proficiency',
				description:
					'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.',
				choose: {
					num: 1,
					from: ['smiths tools', 'brewers supplies', "mason's tools"]
				}
			},
			Stonecutting,
			{
				title: 'Dwarven Toughness',
				description:
					'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
				increase: {
					num: 1,
					type: 'hp'
				},
				increaseByLevel: {
					num: 1,
					type: 'hp',
					increment: 1
				}
			}
		];
		this.traitDescription =
			'+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning';
		this.bonuses = [{ amount: 2, stat: StatConstants.Constitution }];
		this.resistences = ['Poison Damage'];
		this.proficiencies = [
			'Battleaxe',
			'Handaxe',
			'Light Hammer',
			'Warhammer'
		];
		this.languages = [LanguageConstants.Common, LanguageConstants.Dwarvish];
	}
}

export class MountainDwarf extends Race {
	constructor() {
		super();

		this.name = 'Mountain Dwarf';
		this.description =
			'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.';
		this.traits = [
			Darkvision,
			DwarvenResillience,
			DwarvenCombatTraining,
			{
				title: 'ToolProficiency',
				description:
					'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.',
				choose: {
					num: 1,
					from: ['smiths tools', 'brewers supplies', "mason's tools"]
				}
			},
			Stonecutting,
			{
				title: 'Dwarven Armor Training',
				description: 'You have proficiency with light and medium armor.'
			}
		];
		this.traitDescription =
			'+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning';
		this.bonuses = [{ amount: 2, stat: StatConstants.Constitution }];
		this.resistences = ['Poison Damage'];
		this.proficiencies = [
			'Battleaxe',
			'Handaxe',
			'Light Hammer',
			'Warhammer',
			'Light Armor',
			'Medium Armor'
		];
		this.languages = [LanguageConstants.Common, LanguageConstants.Dwarvish];
	}
}

export class Eladrin extends Race {
	constructor() {
		super();

		this.name = 'Eladrin';
		this.description =
			'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.Creatures of magic with strong ties to nature, eladrin live in the twilight realm of the Feywild. Their cities sometimes cross over to the Material Plane, appearing briefly in mountain valleys or deep forest glades before fading back into the Feywild.';
		this.traits = [Darkvision, KeenSenses, FeyAncestry, Trance, FeyStep];
		this.traitDescription =
			'+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance';
		this.bonuses = [{ amount: 2, stat: StatConstants.Dexterity }];
		this.proficiencies = ['Perception'];
		this.languages = [LanguageConstants.Common, LanguageConstants.Elvish];
	}
}

export class HighElf extends Race {
	constructor() {
		super();

		this.name = 'High Elf';
		this.description =
			'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races. The sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.';
		this.traits = [
			Darkvision,
			KeenSenses,
			FeyAncestry,
			Trance,
			{
				title: 'Cantrip',
				description:
					'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'
			},
			{
				title: 'Languages',
				description:
					'You can speak, read, and write Common, Elvish, and one extra language of your choice.'
			}
		];
		this.traitDescription =
			'+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance';
		this.bonuses = [{ amount: 2, stat: StatConstants.Dexterity }];
		this.proficiencies = ['Perception'];
		this.extraLanguage = {
			all: true,
			languages: [],
			choose: 1
		};
		this.languages = [LanguageConstants.Common, LanguageConstants.Elvish];
	}
}

export class WoodElf extends Race {
	constructor() {
		super();

		this.name = 'Wood Elf';
		this.description =
			'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves. Wood elves’ skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.';
		this.traits = [
			Darkvision,
			KeenSenses,
			FeyAncestry,
			Trance,
			{
				title: 'Mask of the Wild',
				description:
					'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
			}
		];
		this.proficiencies = ['Perception'];
		this.traitDescription =
			'+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance';
		this.bonuses = [{ amount: 2, stat: StatConstants.Dexterity }];
		this.languages = [LanguageConstants.Common, LanguageConstants.Elvish];
	}
}

export class HalfElf extends Race {
	constructor() {
		super();

		this.name = 'Half-Elf';
		this.description =
			'Half-elves combine what some say are the best qualities of their elf and human parents.';
		this.traits = [
			Darkvision,
			FeyAncestry,
			{
				title: 'Skill Versatility',
				description:
					'You gain proficiency in two skills of your choice.'
			},
			{
				title: 'Languages',
				description:
					'You can speak, read, and write Common, Elvish, and one extra language of your choice.'
			}
		];
		this.traitDescription =
			'+2 Charisma, +1 to Two Other Ability Scores, Darkvision, Fey Ancestry, Skill Versatility';
		this.bonuses = [{ amount: 2, stat: StatConstants.Charisma }];
		this.extraBonuses = { all: true, stats: [], choose: 2, increase: 1 };
		this.extraLanguage = {
			all: true,
			languages: [],
			choose: 1
		};
		this.extraProficiencies = {
			all: true,
			choose: 2,
			skills: []
		};
		this.languages = [LanguageConstants.Common, LanguageConstants.Elvish];
	}
}

export class HalfOrc extends Race {
	constructor() {
		super();

		this.name = 'Half-Orce';
		this.description =
			'Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.';
		this.traits = [
			Darkvision,
			{
				title: 'Menacing',
				description: 'You gain proficiency in the Intimidation skill.'
			},
			{
				title: 'Relentless Endurance',
				description:
					'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.'
			},
			{
				title: 'Savage Attacks',
				description:
					'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.'
			}
		];
		this.traitDescription =
			'+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless Endurance, Savage Attacks';
		this.bonuses = [
			{ amount: 2, stat: StatConstants.Strength },
			{ amount: 1, stat: StatConstants.Constitution }
		];
		this.proficiencies = ['Intimidation'];
		this.languages = [LanguageConstants.Common, LanguageConstants.Orc];
	}
}

export class LightfootHalfling extends Race {
	constructor() {
		super();

		this.name = 'Lightfoot Halfling';
		this.description =
			'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.';
		this.traits = [
			{
				title: 'Lucky',
				description:
					'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.'
			},
			{
				title: 'Brave',
				description:
					'You have advantage on saving throws against being frightened.'
			},
			{
				title: 'Halfling Nimbleness',
				description:
					'You can move through the space of any creature that is of a size larger than yours.'
			},
			{
				title: 'Naturally Stealthy',
				description:
					'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.'
			}
		];
		this.traitDescription =
			'+2 Dexterity, Lucky, Brave, Halfling Nimbleness';
		this.bonuses = [{ amount: 2, stat: StatConstants.Dexterity }];
		this.languages = [LanguageConstants.Common, LanguageConstants.Halfling];
	}
}

export class StoutHalfling extends Race {
	constructor() {
		super();

		this.name = 'Stout Halfling';
		this.description =
			'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.';
		this.traits = [
			{
				title: 'Lucky',
				description:
					'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.'
			},
			{
				title: 'Brave',
				description:
					'You have advantage on saving throws against being frightened.'
			},
			{
				title: 'Halfling Nimbleness',
				description:
					'You can move through the space of any creature that is of a size larger than yours.'
			},
			{
				title: 'Stout Resillience',
				description:
					'You have advantage on saving throws against poison, and you have resistance against poison damage.'
			}
		];
		this.resistences = ['Poison'];
		this.traitDescription =
			'+2 Dexterity, Lucky, Brave, Halfling Nimbleness';
		this.bonuses = [{ amount: 2, stat: StatConstants.Dexterity }];
		this.languages = [LanguageConstants.Common, LanguageConstants.Halfling];
	}
}

export class Human extends Race {
	constructor() {
		super();

		this.name = 'Human';
		this.description =
			'Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.';
		this.traits = [
			{
				title: 'Languages',
				description:
					'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.'
			},
			{
				title: 'Ability Score Increase',
				description: ' Your ability scores each increase by 1.'
			}
		];
		this.traitDescription = '+1 to All Ability Scores, Extra Language';
		this.abilityIncrease = {
			all: true,
			increase: 1,
			abilities: []
		};
		this.extraLanguage = {
			all: true,
			languages: [],
			choose: 1
		};
		this.languages = [LanguageConstants.Common];
	}
}

export class RockGnome extends Race {
	constructor() {
		super();

		this.name = 'Rock Gnome';
		this.description =
			'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.';
		this.traits = [
			Darkvision,
			{
				title: 'Gnome Cunning',
				description:
					'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.'
			},
			{
				title: "Artificer's Lore",
				description:
					'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.'
			},
			{
				title: 'Tinker',
				description:
					'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents. Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action. Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.'
			}
		];
		this.traitDescription = '+2 Intelligence, Darkvision, Gnome Cunning';
		this.proficiencies = ["artisan's tools"];
		this.bonuses = [{ amount: 2, stat: StatConstants.Intelligence }];
		this.languages = [LanguageConstants.Common, LanguageConstants.Gnomish];
	}
}

export class Tiefling extends Race {
	constructor() {
		super();

		this.name = 'Tiefling';
		this.description =
			'To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.';
		this.traits = [
			Darkvision,
			{
				title: 'Hellish Resistance',
				description: 'You have resistance to fire damage.'
			},
			{
				title: 'Infernal Legacy',
				description:
					'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.'
			}
		];
		this.traitDescription =
			'+2 Charisma, +1 Intelligence, Darkvision, Hellish Resistance, Infernal Legacy';
		this.bonuses = [
			{ amount: 2, stat: StatConstants.Charisma },
			{ amount: 1, stat: StatConstants.Intelligence }
		];
		this.resistences = ['Fire'];
		this.cantrips = ['Thaumaturgy'];
	}
}
