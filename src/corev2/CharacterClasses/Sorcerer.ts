import { StatConstants } from '../Race';
import { CharacterClass } from './CharacterClass';

export class Sorcerer extends CharacterClass {
	constructor() {
		super();
		this.name = 'Sorcerer';
		this.description =
			'A spellcaster who draws on inherent magic from a gift or bloodline';
		this.primaryAbility = 'Charisma';
		this.saves = [StatConstants.Constitution, StatConstants.Charisma];
		this.hitDie = {
			amount: 1,
			sides: 6
		};
		this.hitPoints = {
			levelOne: {
				base: 6,
				modifierKey: StatConstants.Constitution
			},
			higherLevels: {
				addPrevious: true,
				base: 4,
				modifierKey: StatConstants.Constitution,
				rollForBase: true
			}
		};
		this.proficiencies = [
			{
				title: 'Daggers'
			},
			{
				title: 'Darts'
			},
			{
				title: 'Slings'
			},
			{
				title: 'Quarterstaffs'
			},
			{
				title: 'Light crossbows'
			},
			{
				title: 'Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion',
				choose: {
					num: 2,
					from: [
						'Arcana',
						'Deception',
						'Insight',
						'Intimidation',
						'Persuasion',
						'Religion'
					]
				},
				skills: true
			}
		];
		this.equipmentChoices = [
			{
				title: '(a) a light crossbow and 20 bolts or (b) any simple weapon',
				choose: {
					from: [
						{
							name: 'A light crossbow and 20 bolts',
							items: [
								{ name: 'Light Crossbow', quantity: 1 },
								{ name: 'Bolt', quantity: 20 }
							]
						},
						{
							name: 'Any simple weapon',
							groupType: 'Simple Weapons',
							quantity: 1
						}
					],
					num: 1
				}
			},
			{
				title: '(a) a component pouch or (b) an arcane focus',
				choose: {
					from: [
						{ name: 'Component Pouch', quantity: 1 },
						{
							name: 'Arcane Focus',
							quantity: 1
						}
					],
					num: 1
				}
			},
			{
				title: '(a) a dungeoneer’s pack or (b) an explorer’s pack',
				choose: {
					from: [
						{ name: "Dungeoneer's Pack", quantity: 1 },
						{ name: "Explorer's Pack", quantity: 1 }
					],
					num: 1
				}
			},
			{
				title: 'Dagger',
				quantity: 2
			}
		];
		this.traits = [
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

                Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 8,
				title: 'Ability Score Improvement',
				description: `When you reach 8th level, and again at 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

                Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 12,
				title: 'Ability Score Improvement',
				description: `When you reach 12th level, and again at 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

                Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
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
				atLevel: 1,
				title: 'Spellcasting',
				description: `An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the sorcerer spell list.

                Cantrips
                At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.
                
                Spell Slots
                The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.
                
                For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.
                
                Spells Known of 1st Level and Higher
                You know two 1st-level spells of your choice from the sorcerer spell list.
                
                The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.
                
                Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.
                
                Spellcasting Ability
                Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.
                
                Spell save DC = 8 + your proficiency bonus + your Charisma modifier
                
                Spell attack modifier = your proficiency bonus + your Charisma modifier
                
                Spellcasting Focus
                You can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your sorcerer spells.`
			},
			{
				atLevel: 1,
				title: 'Sorverous Origin',
				description: `Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline, detailed at the end of the class description, or one from another source.

                Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.`
			},
			{
				atLevel: 2,
				title: 'Font of Magic',
				description: `At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.

                Sorcery Points
                You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.
                
                Flexible Casting
                You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.
                
                Creating Spell Slots. You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.
                
                Any spell slot you create with this feature vanishes when you finish a long rest.`
			},
			{
				atLevel: 3,
				title: 'Metamagic',
				description: `At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.

                You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.`
			},
			{
				atLevel: 20,
				title: 'Sorcerous Restoration',
				description: `At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.`
			}
		];
	}
}
