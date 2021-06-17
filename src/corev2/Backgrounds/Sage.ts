import { CharacterBackground } from './CharacterBackgrounds';

export class Sage extends CharacterBackground {
	constructor() {
		super();

		this.name = 'Sage';
		this.description = `You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.`;
		this.skillProficiencies = ['Arcana', 'History'];
		this.languagesChoices = [
			{
				title: '',
				choose: {
					num: 2,
					from: [],
					all: true
				}
			}
		];
		this.backgroundFeatures = [
			{
				title: 'Researcher',
				description: `When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.`
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
					text: 'I use polysyllabic words to convey the impression of great erudition.'
				},
				{
					id: 1,
					text: "I've read every book in the world's greatest libraries--or like to boast that I have."
				},
				{
					id: 2,
					text: "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others."
				},
				{
					id: 3,
					text: "There's nothing I like more than a good mystery."
				},
				{
					id: 4,
					text: "I'm willing to listen to every side of an argument before I make my own judgment."
				},
				{
					id: 5,
					text: 'I...speak...slowly...when talking...to idiots...which...almost...everyone...is...compared...to me.'
				},
				{
					id: 6,
					text: 'I am horribly, horribly awkward in social situations.'
				},
				{
					id: 7,
					text: "I'm convinced that people are always trying to steal my secrets."
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
					text: 'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)'
				},
				{
					id: 1,
					text: 'Beauty. What is beautiful points us beyond itself toward what is true. (Good)'
				},
				{
					id: 2,
					text: 'Logic. Emotions must not cloud our logical thinking. (Lawful)'
				},
				{
					id: 3,
					text: 'No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)'
				},
				{
					id: 4,
					text: 'Power. Knowledge is the path to power and domination. (Evil)'
				},
				{
					id: 5,
					text: 'Self-improvement. The goal of a life of study is the betterment of oneself.'
				}
			]
		};

		this.bondsSelection = {
			roll: {
				amount: 1,
				sides: 6
			},
			selections: [
				{ id: 0, text: 'It is my duty to protect my students.' },
				{
					id: 1,
					text: 'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.'
				},
				{
					id: 2,
					text: 'I work to preserve a library, university, scriptorium, or monastery.'
				},
				{
					id: 3,
					text: "My life's work is a series of tomes related to a specific field of lore."
				},
				{
					id: 4,
					text: "I've been searching my whole life for the answer to a certain question."
				},
				{
					id: 5,
					text: 'I sold my soul for knowledge. I hope to do great deeds and win it back.'
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
					text: 'I am easily distracted by the promise of information.'
				},
				{
					id: 1,
					text: 'Most people scream and run when they see a demon. I stop and take notes on its anatomy.'
				},
				{
					id: 2,
					text: 'Unlocking an ancient mystery is worth the price of a civilization.'
				},
				{
					id: 3,
					text: 'I overlook obvious solutions in favor of complicated ones.'
				},
				{
					id: 4,
					text: 'I speak without really thinking through my words, invariably insulting others.'
				},
				{
					id: 5,
					text: "I can't keep a secret to save my life, or anyone else's."
				}
			]
		};
	}
}
