import { CharacterClass } from './CharacterClass';
import { StatConstants } from '../Race';

export class Barbarian extends CharacterClass {
	constructor() {
		super();

		this.name = 'Barbarian';
		this.description =
			'A fierce warrior of primitive background who can enter a battle rage';
		this.hitDie = {
			amount: 1,
			sides: 12
		};
		this.hitPoints = {
			levelOne: {
				base: 12,
				modifierKey: 'Constitution'
			},
			higherLevels: {
				rollForBase: true,
				base: 7,
				modifierKey: 'Constitution',
				addPrevious: true
			}
		};
		this.saves = [StatConstants.Strength, StatConstants.Constitution];
		this.proficiencies = [
			{ title: 'Light Armor' },
			{ title: 'Medium Armor' },
			{ title: 'Shields' },
			{ title: 'Simple Weapons' },
			{ title: 'Martial Weapons' },
			{
				title: 'Choose two from Animal Handling, Athletic, Intimidation, Nature, Perception, and Survival',
				choose: {
					num: 2,
					from: [
						'Animal Handling',
						'Athletics',
						'Intimidation',
						'Nature',
						'Perception',
						'Survival'
					]
				},
				skills: true
			}
		];
		this.traits = [
			{
				atLevel: 1,
				title: 'Rage',
				description:
					'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren’t wearing heavy armor: You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can’t cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.'
			},
			{
				atLevel: 1,
				title: 'Unarmored Defense',
				description:
					'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
			},
			{
				atLevel: 2,
				title: 'Reckless Attack',
				description:
					'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
			},
			{
				atLevel: 2,
				title: 'Danger Sense',
				description:
					'At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.'
			},
			{
				atLevel: 3,
				title: 'Primal Path',
				description: `At 3rd level, you choose a path that shapes the nature of your rage. The Path of the Berserker is detailed at the end of the class description, and additional primal paths are available in other sources. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.`
			},
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description:
					'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
			},
			{
				atLevel: 5,
				title: 'Extra Attack',
				description:
					'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
			},
			{
				atLevel: 5,
				title: 'Fast Movement',
				description:
					'Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.'
			},
			{
				atLevel: 7,
				title: 'Feral Instinct',
				description:
					'By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.'
			},
			{
				atLevel: 8,
				title: 'Ability Score Improvement',
				description: `When you reach 8th level, and again at 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 9,
				title: 'Brutal Critical',
				description:
					'Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.'
			},
			{
				atLevel: 11,
				title: 'Relentless Rage',
				description:
					'Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.'
			},
			{
				atLevel: 12,
				title: 'Ability Score Improvement',
				description:
					'When you reach 12th level, and again at 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.'
			},
			{
				atLevel: 13,
				title: 'Brutal Critical',
				description:
					'At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack. This increases to three additional dice at 17th level.'
			},
			{
				atLevel: 15,
				title: 'Persistent Rage',
				description:
					'Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.'
			},
			{
				atLevel: 16,
				title: 'Ability Score Improvement',
				description:
					'When you reach 16th level, and again at 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.'
			},
			{
				atLevel: 17,
				title: 'Brutal Critical',
				description:
					'At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.'
			},
			{
				atLevel: 18,
				title: 'Indomitable Might',
				description:
					'Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.'
			},
			{
				atLevel: 19,
				title: 'Ability Score Improvement',
				description:
					'When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.'
			},
			{
				atLevel: 20,
				title: 'Primal Champion',
				description:
					'At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.'
			}
		];
		this.equipmentChoices = [
			{
				title: '(a) a greataxe or (b) any martial melee weapon',
				choose: {
					num: 1,
					from: [
						{ name: 'Greataxe', quantity: 1 },
						{
							name: 'Any Martial Melee Weapon',
							quantity: 1,
							groupType: 'Martial Melee Weapons'
						}
					]
				}
			},
			{
				title: '(a) two handaxes or (b) any simple weapon',
				choose: {
					num: 1,
					from: [
						{ name: 'Two Handaxes', quantity: 1 },
						{
							name: 'Any Simple Weapon',
							quantity: 1,
							groupType: 'Simple Weapons'
						}
					]
				}
			},
			{
				title: 'Explorer’s pack'
			},
			{
				title: 'Four Javelins'
			}
		];
	}
}
