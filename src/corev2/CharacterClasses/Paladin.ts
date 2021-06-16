import { StatConstants } from '../Race';
import { CharacterClass } from './CharacterClass';

export class Paladin extends CharacterClass {
	constructor() {
		super();

		this.name = 'Paladin';
		this.description = `A holy warrior bound to a sacred oath`;
		this.primaryAbility = 'Strenth and Charisma';
		this.saves = [StatConstants.Wisdom, StatConstants.Charisma];

		this.hitDie = {
			amount: 1,
			sides: 10
		};

		this.hitPoints = {
			levelOne: {
				base: 10,
				modifierKey: StatConstants.Constitution
			},
			higherLevels: {
				addPrevious: true,
				rollForBase: true,
				base: 6,
				modifierKey: StatConstants.Constitution
			}
		};

		this.traits = [
			{
				atLevel: 1,
				title: 'Divine Sense',
				description: `The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.`
			},
			{
				atLevel: 1,
				title: 'Lay on Hands',
				description: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.

				As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.
				
				Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.
				
				This feature has no effect on undead and constructs.`
			},
			{
				atLevel: 2,
				title: 'Fighting Style',
				description:
					'At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.'
			},
			{
				atLevel: 2,
				title: 'Spellcasting',
				description: `By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does. See Spells Rules for the general rules of spellcasting and the Spells Listing for the paladin spell list.

				Preparing and Casting Spells
				The Paladin table shows how many spell slots you have to cast your paladin spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.
				
				You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.
				
				For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.
				
				You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.
				
				Spellcasting Ability
				Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.
				
				Spell save DC = 8 + your proficiency bonus + your Charisma modifier
				
				Spell attack modifier = your proficiency bonus + your Charisma modifier
				
				Spellcasting Focus
				You can use a holy symbol (see the Adventuring Gear section) as a spellcasting focus for your paladin spells.`
			},
			{
				atLevel: 2,
				title: 'Divine Smite',
				description: `Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.`
			},
			{
				atLevel: 3,
				title: 'Divine Health',
				description: `By 3rd level, the divine magic flowing through you makes you immune to disease.`
			},
			{
				atLevel: 3,
				title: 'Sacred Oath',
				description: `When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion detailed at the end of the class description or one from another source.

				Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.
				
				Oath Spells
				Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don’t count against the number of spells you can prepare each day.
				
				If you gain an oath spell that doesn’t appear on the paladin spell list, the spell is nonetheless a paladin spell for you.
				
				Channel Divinity
				Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.
				
				When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.
				
				Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.`
			},
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 5,
				title: 'Extra Attack',
				description: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`
			},
			{
				atLevel: 6,
				title: 'Aura of Protection',
				description: `Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus. At 18th level, the range of this aura increases to 30 feet.`
			},
			{
				atLevel: 10,
				title: 'Aura of Courage',
				description: `Starting at 10th level, you and friendly creatures within 10 feet of you can’t be frightened while you are conscious. At 18th level, the range of this aura increases to 30 feet`
			},
			{
				atLevel: 11,
				title: 'Improved Divine Smite',
				description: `By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.`
			},
			{
				atLevel: 14,
				title: 'Cleansing Touch',
				description: `Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.`
			},
			{
				atLevel: 18,
				title: 'Aura Improvements',
				description: `At 18th level, the range of your auras increase to 30 feet.`
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
		this.equipmentChoices = [
			{
				title: '(a) a martial weapon and a shield or (b) two martial weapons',
				choose: {
					from: [
						{
							items: [
								{
									groupType: 'Martial Weapons',
									quantity: 1,
									name: 'Martial Weapon'
								},
								{
									quantity: 1,
									name: 'Shield'
								}
							]
						},
						{
							groupType: 'Martial Weapons',
							quantity: 2,
							name: 'Martial Weapons'
						}
					],
					num: 1
				}
			},
			{
				title: '(a) five javelins or (b) any simple melee weapon',
				choose: {
					from: [
						{
							name: 'Javelin',
							quantity: 5
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
					from: [
						{
							name: "Priest's Pack",
							quantity: 1
						},
						{
							name: "Explorer's Pack",
							quantity: 1
						}
					],
					num: 1
				}
			},
			{
				title: 'Chain Mail',
				quantity: 1
			},
			{
				title: 'Holy Symbol',
				quantity: 1
			}
		];
		this.proficiencies = [
			{ title: 'All Armor' },
			{ title: 'Shields' },
			{ title: 'Simple Weapons' },
			{ title: 'Martial Weapons' },
			{
				title: 'Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion',
				skills: true,
				choose: {
					num: 2,
					from: [
						'Athletics',
						'Insight',
						'Intimidation',
						'Medicine',
						'Persuasion',
						'Religion'
					]
				}
			}
		];
	}
}
