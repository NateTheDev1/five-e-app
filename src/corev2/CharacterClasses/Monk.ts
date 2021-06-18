import { StatConstants } from '../Race';
import { CharacterClass } from './CharacterClass';

export class Monk extends CharacterClass {
	constructor() {
		super();

		this.name = 'Monk';
		this.description =
			'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection';
		this.primaryAbility = 'Dexterity and Wisdom';
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
				base: 5,
				rollForBase: true,
				addPrevious: true,
				modifierKey: StatConstants.Constitution
			}
		};

		this.proficiencies = [
			{ title: 'Simple Weapons' },
			{ title: 'Shortswords' },
			{
				title: 'Choose one type of artisan’s tools or one musical instrument',
				choose: {
					num: 1,
					from: ['Musical Instrument', "Artisan's Tools"]
				}
			},
			{
				title: 'Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth',
				choose: {
					num: 2,
					from: [
						'Acrobatics',
						'Athletics',
						'History',
						'Insight',
						'Religion',
						'Stealth'
					]
				},
				skills: true
			}
		];

		this.saves = [StatConstants.Strength, StatConstants.Dexterity];

		this.equipmentChoices = [
			{
				title: '(a) a shortsword or (b) any simple weapon',
				choose: {
					num: 1,
					from: [
						{ name: 'Shortsword', quantity: 1 },
						{
							name: 'Any simple weapon',
							quantity: 1,
							groupType: 'Simple Weapons'
						}
					]
				}
			},
			{
				title: '(a) a dungeoneer’s pack or (b) an explorer’s pack',
				choose: {
					from: [
						{ name: "Dungeoneer's Pack", quantity: 1 },
						{
							name: "Explorer's Pack",
							quantity: 1
						}
					],
					num: 1
				}
			},
			{
				title: 'Dart',
				quantity: 10
			}
		];
		this.traits = [
			{
				atLevel: 1,
				title: 'Unarmored Defense',
				description: `Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.`
			},
			{
				atLevel: 1,
				title: 'Martial Arts',
				description: `At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.

                You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:
                
                You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.
                You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.
                When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.
                Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in the Weapons section.`
			},
			{
				atLevel: 2,
				title: 'Ki',
				description: `Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.

                You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.
                
                When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.
                
                Some of your ki features require your target to make a saving throw to resist the feature’s effects. The saving throw DC is calculated as follows:
                
                Ki save DC = 8 + your proficiency bonus + your Wisdom modifier
                
                Flurry of Blows
                Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.
                
                Patient Defense
                You can spend 1 ki point to take the Dodge action as a bonus action on your turn.
                
                Step of the Wind
                You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.`
			},
			{
				atLevel: 2,
				title: 'Unarmored Movement',
				description: `Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.

                At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.`
			},
			{
				atLevel: 3,
				title: 'Monastic Tradition',
				description: `When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, detailed at the end of the class description or one from another source. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.`
			},
			{
				atLevel: 3,
				title: 'Deflect Missiles',
				description: `Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet.`
			},
			{
				atLevel: 4,
				title: 'Ability Score Improvement',
				description: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.

                Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.`
			},
			{
				atLevel: 4,
				title: 'Slow Fall',
				description: `Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.`
			},
			{
				atLevel: 5,
				title: 'Extra Attack',
				description: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`
			},
			{
				atLevel: 5,
				title: 'Stunning Strike',
				description: `Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.`
			},
			{
				atLevel: 6,
				title: 'Ki-Empowered Strikes',
				description: `Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`
			},
			{
				atLevel: 7,
				title: 'Evasion',
				description: `At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`
			},
			{
				atLevel: 7,
				title: 'Stillness of Mind',
				description: `Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.`
			},
			{
				atLevel: 10,
				title: 'Purity of Body',
				description: `At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.`
			},
			{
				atLevel: 13,
				title: 'Tongue of the Sun and Moon',
				description: `Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.`
			},
			{
				atLevel: 14,
				title: 'Diamond Soul',
				description: `Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.`
			},
			{
				atLevel: 15,
				title: 'Timeless Body',
				description: `At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.`
			},
			{
				atLevel: 18,
				title: 'Empty Body',
				description: `Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.

                Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you.`
			},
			{
				atLevel: 20,
				title: 'Perfect Self',
				description: `At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.`
			},
			{
				atLevel: 9,
				title: 'Unarmored Movement Improvement',
				description: `At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during your move.`
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
				atLevel: 6,
				title: 'Unarmored Movement',
				description: `At 6th level, your Unarmored Speed speed bonus increases to 15 feet while you are not wearing armor or wielding a shield.`
			},
			{
				atLevel: 10,
				title: 'Unarmored Movement',
				description: `At 10th level, your Unarmored Speed speed bonus increases to 20 feet while you are not wearing armor or wielding a shield.`
			},
			{
				atLevel: 14,
				title: 'Unarmored Movement',
				description: `At 14th level, your Unarmored Speed speed bonus increases to 25 feet while you are not wearing armor or wielding a shield.`
			},
			{
				atLevel: 18,
				title: 'Unarmored Movement',
				description: `At 18th level, your Unarmored Speed speed bonus increases to 30 feet while you are not wearing armor or wielding a shield.`
			}
		];
	}
}
