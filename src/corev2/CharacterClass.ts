import { StatConstants } from './Race';

export class CharacterClass {
	public name: string = '';
	public description: string = '';
	public hitDie!: {
		amount: number;
		sides: number;
	};
	public hitPoints!: {
		levelOne: {
			base: number;
			modifierKey: string;
		};
		higherLevels: {
			rollForBase?: boolean;
			base: number;
			modifierKey: string;
			addPrevious?: boolean;
		};
	};
	public primaryAbility: string = '';
	public saves: string[] = [];
	public proficiencies: {
		title: string;
		choose?: { num: number; from: string[]; all?: boolean };
	}[] = [];
	public traits: { title: string; description: string; atLevel: number }[] =
		[];
	public equipmentChoices?: {
		title: string;
		choose?: {
			num: number;
			from: string[];
			type?: string;
		};
	}[] = [];
}

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
				}
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
					from: ['Greataxe', 'Any Martial Melee Weapon']
				}
			},
			{
				title: '(a) two handaxes or (b) any simple weapon',
				choose: {
					num: 1,
					from: ['Two Handaxes', 'Any Simple Weapon']
				}
			},
			{
				title: 'An explorer’s pack and four javelins'
			}
		];
	}
}

export class Bard extends CharacterClass {
	constructor() {
		super();

		this.name = 'Bard';
		this.description =
			'An inspiring magician whose power echoes the music of creation';
		this.primaryAbility = StatConstants.Charisma;
		this.saves = [StatConstants.Dexterity, StatConstants.Charisma];
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
				rollForBase: true,
				base: 5,
				modifierKey: StatConstants.Constitution
			}
		};
		this.proficiencies = [
			{ title: 'Light Armor' },
			{ title: 'Simple Weapons' },
			{ title: 'Hand Crossbows' },
			{ title: 'Longswords' },
			{ title: 'Rapiers' },
			{ title: 'Shortswords' },
			{
				title: 'Choose three musical instruments of your choice',
				choose: { from: [], num: 3, all: true }
			},
			{
				title: 'Choose any three skills',
				choose: { from: [], num: 3, all: true }
			}
		];
		this.traits = [
			{
				atLevel: 1,
				title: 'Spellcasting',
				description: `You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See Spells Rules for the general rules of spellcasting and the Spells Listing for the bard spell list.

				Cantrips
				You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.
				
				Spell Slots
				The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.
				
				For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.
				
				Spells Known of 1st Level and Higher
				You know four 1st-level spells of your choice from the bard spell list.
				
				The Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.
				
				Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.
				
				Spellcasting Ability
				Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.
				
				Spell save DC = 8 + your proficiency bonus + your Charisma modifier
				
				Spell attack modifier = your proficiency bonus + your Charisma modifier
				
				Ritual Casting
				You can cast any bard spell you know as a ritual if that spell has the ritual tag.
				
				Spellcasting Focus
				You can use a musical instrument (see the Tools section) as a spellcasting focus for your bard spells.`
			},
			{
				atLevel: 1,
				title: 'Bardic Inspiration',
				description: `You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.

			Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.
			
			You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.
			
			Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.`
			},
			{
				atLevel: 2,
				title: 'Jack of All Trades',
				description:
					'Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.'
			},
			{
				atLevel: 2,
				title: 'Song of Rest',
				description:
					'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.'
			},
			{
				atLevel: 3,
				title: 'Bard College',
				description:
					"At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore detailed at the end of the class description or another from the Player's Handbook or other sources. Your choice grants you features at 3rd level and again at 6th and 14th level."
			},
			{
				atLevel: 3,
				title: 'Expertise',
				description:
					'At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
			},
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description:
					'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature. Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.'
			},
			{
				atLevel: 10,
				title: 'Expertise',
				description:
					'At 10th level, choose two more of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
			},
			{
				atLevel: 8,
				title: 'Ability Score Improvement',
				description: `When you reach 8th level, and again at 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.
				
				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.
				
				`
			},
			{
				atLevel: 12,
				title: 'Ability Score Improvement',
				description: `When you reach 12th level, and again at 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.
				
				`
			},
			{
				atLevel: 16,
				title: 'Ability Score Improvement',
				description: `When you reach 16th level, and again at 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.
				
				`
			},
			{
				atLevel: 19,
				title: 'Ability Score Improvement',
				description: `When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

				Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 5,
				title: 'Font of Inspiration',
				description:
					'Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.'
			},
			{
				atLevel: 6,
				title: 'Countercharm',
				description:
					'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).'
			},
			{
				atLevel: 20,
				title: 'Superior Inspiration',
				description:
					'At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.'
			},
			{
				atLevel: 10,
				title: 'Magical Secrets',
				description: `By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

				The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.
				
				You learn two additional spells from any classes at 14th level and again at 18th level.`
			},
			{
				atLevel: 14,
				title: 'Magical Secrets',
				description: `At 14th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

				The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.
				
				You learn two additional spells from any classes at 18th level.
				
				`
			},
			{
				atLevel: 18,
				title: 'Magical Secrets',
				description: `At 18th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.

				The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.`
			}
		];
		this.equipmentChoices = [
			{
				title: '(a) a rapier, (b) a longsword, or (c) any simple weapon',
				choose: {
					from: ['Rapier', 'Longsword', 'Simple Weapon'],
					num: 1
				}
			},
			{
				title: '(a) a diplomat’s pack or (b) an entertainer’s pack',
				choose: {
					from: ["Diplomat's Pack", "Entertainer's Pack"],
					num: 1
				}
			},
			{
				title: '(a) a lute or (b) any other musical instrument',
				choose: {
					from: ['Lute', 'Any Musical Instrument'],
					num: 1,
					type: 'instrument'
				}
			},
			{
				title: 'Leather armor and a dagger'
			}
		];
	}
}

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
				}
			}
		];
		this.equipmentChoices = [
			{
				title: '(a) a mace or (b) a warhammer (if proficient)',
				choose: { from: ['Mace', 'Warhammer'], num: 1 }
			},
			{
				title: '(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)',
				choose: {
					from: ['Scale Mail', 'Leather Armor', 'Chain Mail'],
					num: 1
				}
			},
			{
				title: '(a) a light crossbow and 20 bolts or (b) any simple weapon',
				choose: {
					from: ["Priest's Pack", 'Explorers Pack'],
					num: 1
				}
			},
			{
				title: 'A shield and a holy symbol'
			}
		];
	}
}

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
				}
			}
		];
		this.saves = [StatConstants.Intelligence, StatConstants.Wisdom];
	}
}
