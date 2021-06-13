import { CharacterClass } from './CharacterClass';
import { StatConstants } from '../Race';

export class Druid extends CharacterClass {
	constructor() {
		super();

		this.name = 'Druid';
		this.description =
			'A priest of the Old Faith, wielding the powers of nature and adopting animal forms';
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
				rollForBase: true,
				base: 5,
				modifierKey: StatConstants.Constitution,
				addPrevious: true
			}
		};
		this.proficiencies = [
			{ title: 'Light Armor' },
			{ title: 'Medium Armor' },
			{ title: 'Shields (Non-Metal)' },
			{
				title: 'Clubs'
			},
			{
				title: 'Daggers'
			},
			{
				title: 'Darts'
			},
			{
				title: 'Javelins'
			},
			{
				title: 'Maces'
			},
			{
				title: 'Quarterstaffs'
			},
			{
				title: 'Scimitars'
			},
			{
				title: 'Sickles'
			},
			{
				title: 'Slings'
			},
			{
				title: 'Spears'
			},
			{
				title: 'Herbalism Kit'
			},
			{
				title: 'Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival',
				choose: {
					num: 2,
					from: [
						'Arcana',
						'Animal Handling',
						'Insight',
						'Medicine',
						'Nature',
						'Perception',
						'Religion',
						'Survival'
					]
				},
				skills: true
			}
		];
		this.saves = [StatConstants.Intelligence, StatConstants.Wisdom];
		this.equipmentChoices = [
			{
				title: '(a) a wooden shield or (b) any simple weapon',
				choose: {
					num: 1,
					from: [
						{
							name: 'Wooden Shield',
							quantity: 1
						},
						{
							name: 'Any simple weapon',
							quantity: 1,
							items: [],
							groupType: 'Simple Weapons'
						}
					]
				}
			},
			{
				title: '(a) a scimitar or (b) any simple melee weapon',
				choose: {
					num: 1,
					from: [
						{
							name: 'Scimitar',
							quantity: 1
						},
						{
							name: 'Any Simple Weapon',
							groupType: 'Simple Weapons',
							items: [],
							quantity: 1
						}
					]
				}
			},
			{
				title: 'Leather Armor'
			},
			{
				title: "Explorer's Pack"
			},
			{
				title: 'Druidic Focus'
			}
		];
		this.traits = [
			{
				atLevel: 1,
				title: 'Druidic',
				description:
					'You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.'
			},
			{
				atLevel: 1,
				title: 'Spellcasting',
				description: `Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See Spells Rules for the general rules of spellcasting and the Spells Listing for the druid spell list.

				Cantrips
				At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.
				
				Preparing and Casting Spells
				The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.
				
				You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.
				
				For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.
				
				You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.
				
				Spellcasting Ability
				Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.
				
				Spell save DC = 8 + your proficiency bonus + your Wisdom modifier
				
				Spell attack modifier = your proficiency bonus + your Wisdom modifier
				
				Ritual Casting
				You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.
				
				Spellcasting Focus
				You can use a druidic focus (see the Adventuring Gear section) as a spellcasting focus for your druid spells.`
			},
			{
				atLevel: 2,
				title: 'Wild Shape',
				description: `Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.

				Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn’t have a flying or swimming speed.`
			},
			{
				atLevel: 4,
				title: 'Wild Shape Improvement',
				description: `At 4th level, you can use your action to magically assume the shape of a beast that you have seen before of challenge rating 1/2 or lower that doesn't have a flying speed. You can use this feature twice. You regain expended uses when you finish a short or long rest.`
			},
			{
				atLevel: 8,
				title: 'Wild Shape Improvement',
				description: `At 8th level, you can use your action to magically assume the shape of a beast that you have seen before of challenge rating 1 or lower. You can use this feature twice. You regain expended uses when you finish a short or long rest.`
			},
			{
				atLevel: 2,
				title: 'Druid Circle',
				description: `At 2nd level, you choose to identify with a circle of druids: the Circle of the Land detailed at the end of the class description or one from the Player's Handbook or other sources. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.`
			},
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 18,
				title: 'Timeless Body',
				description: `Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.`
			},
			{
				atLevel: 18,
				title: 'Beast Spells',
				description: `Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren’t able to provide material components.`
			},
			{
				atLevel: 20,
				title: 'Archdruid',
				description: `At 20th level, you can use your Wild Shape an unlimited number of times. Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren’t consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.`
			},
			{
				atLevel: 8,
				title: 'Ability Score Improvement',
				description: `When you reach 8th level, and again at 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 12,
				title: 'Ability Score Improvement',
				description: `When you reach 12th level, and again at 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 16,
				title: 'Ability Score Improvement',
				description: `When you reach 16th level, and again at 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 19,
				title: 'Ability Score Improvement',
				description: `When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			}
		];
		this.languages = ['Druidic'];
	}
}
