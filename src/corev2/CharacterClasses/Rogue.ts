import { StatConstants } from '../Race';
import { CharacterClass } from './CharacterClass';

const SkillConstants = {
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

export class Rogue extends CharacterClass {
	constructor() {
		super();

		this.name = 'Rogue';
		this.description =
			'A scoundrel who uses stealth and trickery to overcome obstacles and enemies';
		this.primaryAbility = 'Dexterity and Intelligence';
		this.saves = [StatConstants.Dexterity, StatConstants.Intelligence];
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
				modifierKey: StatConstants.Constitution,
				base: 5,
				rollForBase: true
			}
		};

		this.proficiencies = [
			{ title: 'Light Armor' },
			{ title: 'Simple Weapons' },
			{ title: 'Hand Crossbows' },
			{ title: 'Longswords' },
			{ title: 'Rapiers' },
			{ title: 'Shortswords' },
			{ title: "Thieve's tools" },
			{
				title: ' Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth',
				skills: true,
				choose: {
					from: [
						SkillConstants.acrobatics,
						SkillConstants.athletics,
						SkillConstants.deception,
						SkillConstants.insight,
						SkillConstants.intimidation,
						SkillConstants.investigation,
						SkillConstants.perception,
						SkillConstants.performance,
						SkillConstants.persuasion,
						SkillConstants.sleightOfHand,
						SkillConstants.stealth
					],
					num: 4
				}
			}
		];

		this.equipmentChoices = [
			{
				title: '(a) a rapier or (b) a shortsword',
				choose: {
					from: [
						{ name: 'Rapier', quantity: 1 },
						{ name: 'Shortsword', quantity: 1 }
					],
					num: 1
				}
			},
			{
				title: '(a) a shortbow and quiver of 20 arrows or (b) a shortsword',
				choose: {
					from: [
						{
							items: [
								{ name: 'Shortbow', quantity: 1 },
								{ name: 'Arrow', quantity: 20 }
							]
						},
						{
							name: 'Shortsword',
							quantity: 1
						}
					],
					num: 1
				}
			},
			{
				title: '(a) a burglar’s pack, (b) a dungeoneer’s pack, or (c) an explorer’s pack',
				choose: {
					from: [
						{ name: "Burglar's Pack", quantity: 1 },
						{ name: "Dungeoneer's Pack", quantity: 1 },
						{ name: "Explorer's Pack", quantity: 1 }
					],
					num: 1
				}
			},
			{
				title: 'Leather Armor',
				quantity: 1
			},
			{
				title: 'Dagger',
				quantity: 2
			},
			{ title: "Thieve's Tools", quantity: 1 }
		];
		this.traits = [
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description: `When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

                Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 8,
				title: 'Ability Score Improvement',
				description: `When you reach 8th level, and again at 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

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
				title: 'Expertise',
				description: `At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

                At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit.`
			},
			{
				atLevel: 1,
				title: 'Sneak Attack',
				description: `Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.

                You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.
                
                The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.`
			},
			{
				atLevel: 1,
				title: "Thieve's Cant",
				description: `During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.

                In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.`
			},
			{
				atLevel: 2,
				title: 'Cunning Action',
				description: `Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.`
			},
			{
				atLevel: 3,
				title: 'Roguish Archetype',
				description: `At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, detailed at the end of the class description, or one from another source. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.`
			},
			{
				atLevel: 5,
				title: 'Uncanny Dodge',
				description: `Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.`
			},
			{
				atLevel: 7,
				title: 'Evasion',
				description: `Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as an ancient red dragon’s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`
			},
			{
				atLevel: 11,
				title: 'Reliable Talent',
				description: `By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.`
			},
			{
				atLevel: 14,
				title: 'Blindsense',
				description: `Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.`
			},
			{
				atLevel: 15,
				title: 'Slippery Mind',
				description: `By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.`
			},
			{
				atLevel: 18,
				title: 'Elusive',
				description: `Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated.`
			},
			{
				atLevel: 20,
				title: 'Stroke of Luck',
				description: `At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.

                Once you use this feature, you can’t use it again until you finish a short or long rest.`
			},
			{
				atLevel: 6,
				title: 'Expertise',
				description: `At 6th level, choose two more of your skill proficiencies, or one more of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.`
			},
			{
				atLevel: 10,
				title: 'Ability Score Improvement',
				description: `When you reach 10th level, and again at 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			}
		];
	}
}
