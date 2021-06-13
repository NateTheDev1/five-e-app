import { CharacterClass } from './CharacterClass';
import { StatConstants } from '../Race';

export class Cleric extends CharacterClass {
	constructor() {
		super();

		this.name = 'Cleric';
		this.description =
			'A priestly champion who wields divine magic in service of a higher power';
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
		this.primaryAbility = StatConstants.Wisdom;
		this.saves = [StatConstants.Wisdom, StatConstants.Charisma];
		this.traits = [
			{
				atLevel: 1,
				title: 'Spellcasting',
				description: `As a conduit for divine power, you can cast cleric spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the cleric spell list.

				Cantrips
				At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.
				
				Preparing and Casting Spells
				The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.
				
				You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.
				
				For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.
				
				You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.
				
				Spellcasting Ability
				Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.
				
				Spell save DC = 8 + your proficiency bonus + your Wisdom modifier
				
				Spell attack modifier = your proficiency bonus + your Wisdom modifier
				
				Ritual Casting
				You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.
				
				Spellcasting Focus
				You can use a holy symbol (see the Adventuring Gear section) as a spellcasting focus for your cleric spells.`
			},
			{
				atLevel: 2,
				title: 'Channel Divinity',
				description: `At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.

				When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.
				
				Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.
				
				Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.
				
				Channel Divinity: Turn Undead
				As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.
				
				A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.`
			},
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 5,
				title: 'Destroy Undead',
				description:
					'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table. (5th - 1/2 or lower) (8th 1 or lower) (11th 2 or lower) (14th 3 or lower) (17th 4 or lower)'
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
				atLevel: 10,
				title: 'Divine Intervention',
				description: `Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.

				Imploring your deity’s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.
				
				If your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.
				
				At 20th level, your call for intervention succeeds automatically, no roll required.`
			}
		];
		this.proficiencies = [
			{ title: 'Light Armor' },
			{ title: 'Medium Armor' },
			{ title: 'Shields' },
			{ title: 'Simple Weapons' },
			{
				title: 'Choose two from History, Insight, Medicine, Persuasion, and Religon',
				choose: {
					all: false,
					from: [
						'History',
						'Insight',
						'Medicine',
						'Persuasion',
						'Religon'
					],
					num: 2
				},
				skills: true
			}
		];
		this.equipmentChoices = [
			{
				title: '(a) a mace or (b) a warhammer (if proficient)',
				choose: {
					from: [
						{ name: 'Mace', quantity: 1 },
						{ name: 'Warhammer', quantity: 1 }
					],
					num: 1
				}
			},
			{
				title: '(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)',
				choose: {
					from: [
						{ name: 'Scale Mail', quantity: 1 },
						{ name: 'Leather Armor', quantity: 1 },
						{
							name: 'Chain Mail',
							quantity: 1
						}
					],
					num: 1
				}
			},
			{
				title: '(a) a light crossbow and 20 bolts or (b) any simple weapon',
				choose: {
					from: [
						{
							items: [
								{ name: 'Light Crossbow', quantity: 1 },
								{ name: 'Bolt', quantity: 20 }
							]
						},
						{
							name: 'Any simple weapon',
							quantity: 1,
							groupType: 'Simple Weapons'
						}
					],
					num: 1
				}
			},
			{
				title: '(a) a priest’s pack or (b) an explorer’s pack',
				choose: {
					num: 1,
					from: [
						{ name: "Priest's Pack", quantity: 1 },
						{ name: "Explorer's Pack", quantity: 1 }
					]
				}
			},
			{
				title: 'Shield'
			},
			{
				title: 'Holy symbol'
			}
		];
	}
}
