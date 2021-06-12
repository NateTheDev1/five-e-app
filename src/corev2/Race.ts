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
	Dexterity = 'Dexterity'
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
	public extraLanguage?: {
		all: boolean;
		languages: any[];
		choose: number;
	};
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
			}
		];
		this.traitDescription =
			'+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance';
		this.bonuses = [{ amount: 2, stat: StatConstants.Dexterity }];
		this.extraLanguage = {
			all: true,
			languages: [],
			choose: 1
		};
	}
}

export class WoodElf extends Race {
	constructor() {
		super();

		this.name = '';
	}
}
