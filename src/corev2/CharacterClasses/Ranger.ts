import { StatConstants } from '../Race';
import { CharacterClass } from './CharacterClass';

export class Ranger extends CharacterClass {
	constructor() {
		super();

		this.name = 'name';
		this.description =
			'A warrior who combats threats on the edges of civilization';
		this.primaryAbility = 'Dexterity and Wisdom';
		this.saves = [StatConstants.Strength, StatConstants.Dexterity];
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

		this.proficiencies = [
			{ title: 'Light Armor' },
			{ title: 'Medium Armor' },
			{ title: 'Shields' },
			{ title: 'Simple Weapons' },
			{ title: 'Martial Weapons' },
			{
				title: 'Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival',
				choose: {
					num: 2,
					from: [
						'Animal handling',
						'Athletics',
						'Insight',
						'Investigation',
						'Nature',
						'Perception',
						'Stealth',
						'Surival'
					]
				}
			}
		];

		this.equipmentChoices = [
			{
				title: '(a) scale mail or (b) leather armor',
				choose: {
					num: 1,
					from: [
						{ name: 'Scale Mail', quantity: 1 },
						{ name: 'Leather Armor', quantity: 1 }
					]
				}
			},
			{
				title: '(a) two shortswords or (b) two simple melee weapons',
				choose: {
					from: [
						{ name: 'Shortsword', quantity: 2 },
						{
							name: 'Simple Melee Weapons',
							quantity: 2,
							groupType: 'Simple Melee Weapons'
						}
					],
					num: 1
				}
			},
			{
				title: '(a) a dungeoneer’s pack or (b) an explorer’s pack',
				choose: {
					from: [
						{ name: "Priest's Pack", quantity: 1 },
						{ name: "Explorer's Pack", quantity: 1 }
					],
					num: 1
				}
			},
			{
				title: 'Longbow',
				quantity: 1
			},
			{
				title: 'Arrows',
				quantity: 20
			}
		];

		// TODO: Finish traits for ranger
		this.traits = [
			{
				atLevel: 1,
				title: 'Favored Enemy',
				description: `Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

                Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.
                
                You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.
                
                When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.
                
                You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.`
			},
			{
				atLevel: 1,
				title: 'Natural Explorer',
				description: `You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.

                While traveling for an hour or more in your favored terrain, you gain the following benefits:
                
                Difficult terrain doesn’t slow your group’s travel.
                Your group can’t become lost except by magical means.
                Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.
                If you are traveling alone, you can move stealthily at a normal pace.
                When you forage, you find twice as much food as you normally would.
                While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.
                You choose additional favored terrain types at 6th and 10th level.`
			},
			{
				atLevel: 2,
				title: 'Fighting Style',
				description: `At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. 

				You can’t take a Fighting Style option more than once, even if you later get to choose again.`
			},
			{
				atLevel: 2,
				title: 'Spellcasting',
				description: `By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See Spells Rules for the general rules of spellcasting and the Spells Listing for the ranger spell list.

				Spell Slots
				The Ranger table shows how many spell slots you have to cast your ranger spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.
				
				For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.
				
				Spells Known of 1st Level and Higher
				You know two 1st-level spells of your choice from the ranger spell list.
				
				The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.
				
				Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.
				
				Spellcasting Ability
				Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.
				
				Spell save DC = 8 + your proficiency bonus + your Wisdom modifier
				
				Spell attack modifier = your proficiency bonus + your Wisdom modifier`
			},
			{
				atLevel: 3,
				title: 'Ranger Archetype',
				description: `At 3rd level, you choose an archetype that you strive to emulate: the Hunter that is detailed at the end of the class description or one from another source. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.`
			},
			{
				atLevel: 3,
				title: 'Primeval Awareness',
				description: `Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.`
			},
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 5,
				title: 'Extra Attack',
				description:
					'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.'
			},
			{
				atLevel: 8,
				title: "Land's Stride",
				description: `Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.

				 In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.`
			},
			{
				atLevel: 10,
				title: 'Hide in Plain Sight',
				description: `Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.

				Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.`
			},
			{
				atLevel: 14,
				title: 'Vanish',
				description: `Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail.`
			},
			{
				atLevel: 18,
				title: 'Feral Senses',
				description: `At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.

				You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened.`
			},
			{
				atLevel: 20,
				title: 'Foe Slayer',
				description: `At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.`
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
			}
		];
	}
}
