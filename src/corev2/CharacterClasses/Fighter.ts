import { CharacterClass } from './CharacterClass';
import { StatConstants } from '../Race';

export class Fighter extends CharacterClass {
	constructor() {
		super();

		this.name = 'Fighter';
		this.description =
			'A master of martial combat, skilled with a variety of weapons and armor';
		this.hitDie = {
			amount: 1,
			sides: 10
		};
		this.primaryAbility = 'Strength or Dexterity';
		this.saves = [StatConstants.Strength, StatConstants.Dexterity];
		this.hitPoints = {
			levelOne: {
				base: 10,
				modifierKey: StatConstants.Constitution
			},
			higherLevels: {
				rollForBase: true,
				base: 6,
				addPrevious: true,
				modifierKey: StatConstants.Constitution
			}
		};
		this.proficiencies = [
			{ title: 'All armor' },
			{ title: 'Shields' },
			{ title: 'Simple weapons' },
			{ title: 'Martial weapons' },
			{
				title: 'Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival',
				choose: {
					num: 2,
					from: [
						'Acrobatics',
						'Animal Handling',
						'Athletics',
						'History',
						'Insight',
						'Intimidation',
						'Perception',
						'Surival'
					]
				},
				skills: true
			}
		];
		this.equipmentChoices = [
			{
				title: '(a) chain mail or (b) leather armor, longbow, and 20 arrows',
				choose: {
					num: 1,
					from: [
						{ name: 'Chain Mail', quantity: 1 },
						{
							items: [
								{ name: 'Leather Armor', quantity: 2 },
								{ name: 'Longbow', quantity: 1 },
								{ name: 'Arrow', quantity: 20 }
							]
						}
					]
				}
			},
			{
				title: '(a) a martial weapon and a shield or (b) two martial weapons',
				choose: {
					num: 1,
					from: [
						{
							items: [
								{
									name: 'Martial Weapon',
									quantity: 1,
									groupType: 'Martial Weapons'
								},
								{
									name: 'Shield',
									quantity: 1
								}
							]
						},
						{
							name: 'Two Martial Weapons',
							quantity: 2,
							groupType: 'Martial Weapons'
						}
					]
				}
			},
			{
				title: '(a) a light crossbow and 20 bolts or (b) two handaxes',
				choose: {
					num: 1,
					from: [
						{
							items: [
								{ name: 'Light Crossbow', quantity: 1 },
								{ name: 'Bolt', quantity: 20 }
							]
						},
						{
							name: 'Handaxe',
							quantity: 2
						}
					]
				}
			},
			{
				title: '(a) a dungeoneer’s pack or (b) an explorer’s pack',
				choose: {
					num: 1,
					from: [
						{ name: "Dungeoneer's Pack", quantity: 1 },
						{ name: "Explorer's Pack", quantity: 1 }
					]
				}
			}
		];
		this.traits = [
			{
				atLevel: 1,
				title: 'Fighting Style',
				description:
					'You adopt a particular style of fighting as your specialty. You can’t take a Fighting Style option more than once, even if you later get to choose again.'
			},
			{
				atLevel: 1,
				title: 'Second Wind',
				description:
					'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.'
			},
			{
				atLevel: 2,
				title: 'Action Surge',
				description: `Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.`
			},
			{
				atLevel: 3,
				title: 'Martial Archetype',
				description: `At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.`
			},
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description: `When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 5,
				title: `Extra Attack`,
				description: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.`
			},
			{
				atLevel: 9,
				title: 'Indomitable',
				description: `Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest.

				You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.`
			},
			{
				atLevel: 6,
				title: 'Ability Score Improvement',
				description: `When you reach 6th level, and again at 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 8,
				title: 'Ability Score Improvement',
				description: `When you reach 8th level, and again at 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 12,
				title: 'Ability Score Improvement',
				description: `When you reach 12th level, and again at 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 14,
				title: 'Ability Score Improvement',
				description: `When you reach 14th level, and again at 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.
				`
			},
			{
				atLevel: 16,
				title: 'Ability Score Improvement',
				description: `When you reach 16th level, and again at 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 19,
				title: 'Ability Score Improvement',
				description: `When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 11,
				title: 'Extra Attack',
				description: `Beginning at 11th level, you can attack three times, instead of twice, whenever you take the Attack action on your turn.

				The number of attacks increases to four when you reach 20th level in this class.`
			},
			{
				atLevel: 20,
				title: 'Extra Attack',
				description: `At 20th level, you can attack four times, instead of three, whenever you take the Attack action on your turn.`
			}
		];
	}
}
