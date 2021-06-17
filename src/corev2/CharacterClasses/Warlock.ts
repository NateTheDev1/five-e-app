import { StatConstants } from '../Race';
import { CharacterClass } from './CharacterClass';

const title = 'Ability Score Improvement';

export class Warlock extends CharacterClass {
	constructor() {
		super();

		this.name = 'Warlock';
		this.description =
			'A wielder of magic that is derived from a bargain with an extraplanar entity';
		this.hitDie = {
			amount: 1,
			sides: 8
		};
		this.hitPoints = {
			levelOne: {
				base: 8,
				modifierKey: StatConstants.Constitution
			},
			higherLevels: {
				addPrevious: true,
				base: 5,
				modifierKey: StatConstants.Constitution,
				rollForBase: true
			}
		};

		this.primaryAbility = 'Charisma';
		this.saves = [StatConstants.Wisdom, StatConstants.Charisma];
		this.proficiencies = [
			{
				title: 'Light Armor'
			},
			{
				title: 'Simple Weapons',
				type: 'Simple Weapons'
			},
			{
				title: 'Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion',
				choose: {
					from: [
						'Arcana',
						'Deception',
						'History',
						'Intimidation',
						'Investigation',
						'Nature',
						'Religion'
					],
					num: 2
				},
				skills: true
			}
		];

		this.equipmentChoices = [
			{
				title: '(a) a light crossbow and 20 bolts or (b) any simple weapon',
				choose: {
					num: 1,
					from: [
						{
							items: [
								{
									name: 'Light Crossbow',
									quantity: 1
								},
								{
									name: 'Bolt',
									quantity: 20
								}
							]
						},
						{
							name: 'Any Simple Weapon',
							quantity: 1,
							groupType: 'Simple Weapons'
						}
					]
				}
			},
			{
				title: '(a) a component pouch or (b) an arcane focus',
				choose: {
					from: [
						{
							name: 'Component Pouch',
							quantity: 1
						},
						{
							name: 'Arcane Focus',
							quantity: 1
						}
					],
					num: 1
				}
			},
			{
				title: '(a) a scholar’s pack or (b) a dungeoneer’s pack',
				choose: {
					num: 1,
					from: [
						{
							name: "Scholar's Pack",
							quantity: 1
						},
						{
							name: "Dungeoneer's Pack",
							quantity: 1
						}
					]
				}
			},
			{
				title: 'Leather Armor',
				quantity: 1
			},
			{
				title: 'Simple Weapon',
				quantity: 1
			},
			{
				title: 'Dagger',
				quantity: 2
			}
		];

		this.traits = [
			{
				atLevel: 4,
				title,
				description: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 8,
				title,
				description: `When you reach 8th level, and again at 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

                Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 12,
				title,
				description: `When you reach 12th level, and again at 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

                Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 16,
				title,
				description: `When you reach 16th level, and again at 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

                Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 19,
				title,
				description: `When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

                Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 1,
				title: 'Otherworldly Patron',
				description: `At 1st level, you have struck a bargain with an otherworldly being of your choice: the Fiend, which is detailed at the end of the class description, or one from another source. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.`
			},
			{
				atLevel: 1,
				title: 'Pact Magic',
				description: `Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the warlock spell list.

                Cantrips
                You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.
                
                Spell Slots
                The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.
                
                For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.
                
                Spells Known of 1st Level and Higher
                At 1st level, you know two 1st-level spells of your choice from the warlock spell list.
                
                The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what’s shown in the table’s Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.
                
                Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.
                
                Spellcasting Ability
                Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.
                
                Spell save DC = 8 + your proficiency bonus + your Charisma modifier
                
                Spell attack modifier = your proficiency bonus + your Charisma modifier
                
                Spellcasting Focus
                You can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your warlock spells.`
			},
			{
				atLevel: 2,
				title: 'Eldritch Invocations',
				description: `In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.

				At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.
				
				Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.
				
				If an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class.`
			},
			{
				atLevel: 3,
				title: 'Pact Boon',
				description: `At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.`
			},
			{
				atLevel: 11,
				title: 'Mystic Arcanum (6th Level)',
				description: `At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.

				You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.
				
				At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.`
			},
			{
				atLevel: 20,
				title: 'Eldritch Master',
				description: `At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.`
			},
			{
				atLevel: 13,
				title: 'Mystic Arcanum (7th Level)',
				description: `At 13th level, your patron bestows upon you a magical secret called an arcanum. Choose one 7th-level spell from the warlock spell list as this arcanum.

				You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.
				
				At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.`
			},
			{
				atLevel: 15,
				title: 'Mystic Arcanum (8th Level)',
				description: `At 15th level, your patron bestows upon you a magical secret called an arcanum. Choose one 8th-level spell from the warlock spell list as this arcanum.

				You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.
				
				At 17th level, you gain a 9th-level warlock spell of your choice that can be cast in this way. You regain all uses of your Mystic Arcanum when you finish a long rest.`
			},
			{
				atLevel: 17,
				title: 'Mystic Arcanum (9th Level)',
				description: `At 17th level, your patron bestows upon you a magical secret called an arcanum. Choose one 9th-level spell from the warlock spell list as this arcanum.

				You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.
				
				You regain all uses of your Mystic Arcanum when you finish a long rest.`
			}
		];
	}
}
