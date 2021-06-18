import { CharacterBackground } from './CharacterBackgrounds';

export class FolkHero extends CharacterBackground {
	constructor() {
		super();

		this.name = 'Folk Hero';
		this.description =
			'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.';
		this.skillProficiencies = ['Animal Handling', 'Survival'];
		this.toolProficiencies = ['Vehicles (Land)'];
		this.equipmentChoices = [
			{
				title: "Choose an Artisan's Tool",
				choose: {
					num: 1,
					from: [
						"Alchemist's Supplies",
						"Brewer's Supplies",
						"Caligrapher's Suppies",
						"Carpenter's Tools",
						"Cartographer's Tools",
						"Cobbler's Tools",
						"Cook's Utensils",
						"Glassblower's Tools",
						"Jewler's Tools",
						"Leatherworker's Tools",
						"Mason's Tools",
						"Painter's Supplies",
						"Potter's Tools",
						"Smith's Tools",
						"Tinker's Tools",
						"Weaver's Tools",
						"Woodcarver's Tools"
					]
				}
			}
		];
		this.backgroundFeatures = [
			{
				title: 'Rustic Hospitality',
				description: `Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.`
			}
		];
		this.traitsSelection = {
			roll: {
				amount: 1,
				sides: 8
			},
			selections: [
				{
					id: 0,
					text: 'I judge people by their actions, not their words.'
				},
				{
					id: 1,
					text: "If someone is in trouble, I'm always willing to lend help."
				},
				{
					id: 2,
					text: 'When I set my mind to something, I follow through no matter what gets in my way.'
				},
				{
					id: 3,
					text: 'I have a strong sense of fair play and always try to find the most equitable solution to arguments.'
				},
				{
					id: 4,
					text: "I'm confident in my own abilities and do what I can to instill confidence in others."
				},
				{
					id: 5,
					text: 'Thinking is for other people. I prefer action.'
				},
				{
					id: 6,
					text: 'I misuse long words in an attempt to sound smarter.'
				},
				{
					id: 7,
					text: 'I get bored easily. When am I going to get on with my destiny.'
				}
			]
		};
		this.idealsSelection = {
			roll: {
				amount: 1,
				sides: 6
			},
			selections: [
				{
					id: 0,
					text: 'Respect. People deserve to be treated with dignity and respect. (Good)'
				},
				{
					id: 1,
					text: 'Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)'
				},
				{
					id: 2,
					text: 'Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)'
				},
				{
					id: 3,
					text: 'Might. If I become strong, I can take what I want--what I deserve. (Evil)'
				},
				{
					id: 4,
					text: "Sincerity. There's no good pretending to be something I'm not. (Neutral)"
				},
				{
					id: 5,
					text: 'Destiny. Nothing and no one can steer me away from my higher calling. (Any)'
				}
			]
		};

		this.bondsSelection = {
			roll: {
				amount: 1,
				sides: 6
			},
			selections: [
				{
					id: 0,
					text: 'I have a family, but I have no idea where they are. One day, I hope to see them again.'
				},
				{
					id: 1,
					text: 'I worked the land, I love the land, and I will protect the land.'
				},
				{
					id: 2,
					text: 'A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.'
				},
				{
					id: 3,
					text: 'My tools are symbols of my past life, and I carry them so that I will never forget my roots.'
				},
				{
					id: 4,
					text: 'I protect those who cannot protect themselves.'
				},
				{
					id: 5,
					text: 'I wish my childhood sweetheart had come with me to pursue my destiny.'
				}
			]
		};

		this.flawsSelection = {
			roll: {
				amount: 1,
				sides: 6
			},
			selections: [
				{
					id: 0,
					text: 'The tyrant who rules my land will stop at nothing to see me killed.'
				},
				{
					id: 1,
					text: "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure."
				},
				{
					id: 2,
					text: 'The people who knew me when I was young know my shameful secret, so I can never go home again.'
				},
				{
					id: 3,
					text: 'I have a weakness for the vices of the city, especially hard drink.'
				},
				{
					id: 4,
					text: 'Secretly, I believe that things would be better if I were a tyrant lording over the land.'
				},
				{ id: 5, text: 'I have trouble trusting in my allies.' }
			]
		};
	}
}
