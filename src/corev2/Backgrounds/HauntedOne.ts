import { CharacterBackground } from './CharacterBackgrounds';

export class HauntedOne extends CharacterBackground {
	constructor() {
		super();

		this.name = 'Haunted One';
		this.description = `You are haunted by something so terrible that you dare not speak of it. You’ve tried to bury it and run away from it, to no avail. Whatever this thing is that haunts you can’t be slain with a sword or banished with a spell. It might come to you as a shadow on the wall, a bloodcurdling nightmare, a memory that refuses to die, or a demonic whisper in the dark. The burden has taken its toll, isolating you from most people and making you question your sanity. You must find a way to overcome it before it destroys you.`;
		this.skillProficiencyChoices = [
			{
				title: '',
				choose: {
					from: ['Arcana', 'Investigation', 'Religion', 'Surival'],
					num: 2
				}
			}
		];
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
				title: 'Heart of Darkness',
				description: `Those who look into your eyes can see that you have faced unimaginable horror and that you are no stranger to darkness. Though they might fear you, commoners will extend you every courtesy and do their utmost to help you. Unless you have shown yourself to be a danger to them, they will even take up arms to fight alongside you, should you find yourself facing an enemy alone.`
			}
		];
		this.traitsSelection = {
			roll: {
				amount: 1,
				sides: 8
			},
			selections: [
				{
					text: 'I don’t run from evil. Evil runs from me.'
				},
				{
					text: 'I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.'
				},
				{
					text: 'I spend money freely and live life to the fullest, knowing that tomorrow I might die.'
				},
				{
					text: 'I live for the thrill of the hunt.'
				},
				{
					text: 'I don’t talk about the thing that torments me. I’d rather not burden others with my curse.'
				},
				{
					text: 'I expect danger around every corner.'
				},
				{
					text: 'I refuse to become a victim, and I will not allow others to be victimized.'
				},
				{
					text: 'I put no trust in divine beings.'
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
					text: 'I try to help those in need, no matter what the personal cost. (Good)'
				},
				{
					text: 'I’ll stop the spirits that haunt me or die trying. (Any)'
				},
				{
					text: 'I kill monsters to make the world a safer place, and to exorcise my own demons. (Good)'
				},
				{
					text: 'I have a dark calling that puts me above the law. (Chaotic)'
				},
				{
					text: 'I like to know my enemy’s capabilities and weaknesses before rushing into battle. (Lawful)'
				},
				{
					text: 'I’m a monster that destroys other monsters, and anything else that gets in my way. (Evil)'
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
					text: 'I keep my thoughts and discoveries in a journal. My journal is my legacy.'
				},
				{
					text: 'I would sacrifice my life and my soul to protect the innocent.'
				},
				{
					text: 'My torment drove away the person I love. I strive to win back the love I’ve lost.'
				},
				{
					text: 'A terrible guilt consumes me. I hope that I can find redemption through my actions.'
				},
				{
					text: 'There’s evil in me, I can feel it. It must never be set free.'
				},
				{
					text: 'I have a child to protect. I must make the world a safer place for him (or her).'
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
					text: 'I have certain rituals that I must follow every day. I can never break them.'
				},
				{
					text: 'I assume the worst in people.'
				},
				{
					text: 'I feel no compassion for the dead. They’re the lucky ones.'
				},
				{
					text: 'I have an addiction.'
				},
				{
					text: 'I am a purveyor of doom and gloom who lives in a world without hope.'
				},
				{
					text: 'I talk to spirits that no one else can see.'
				}
			]
		};
	}
}
