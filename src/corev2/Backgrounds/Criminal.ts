import { CharacterBackground } from './CharacterBackgrounds';

export class Criminal extends CharacterBackground {
	constructor() {
		super();
		this.name = 'Criminal';
		this.description =
			'You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.';
		this.skillProficiencies = ['Deception', 'Stealth'];
		this.toolProficiencies = ["Thieves' Tools"];
		this.gamingChoices = [
			{
				title: 'Choose a gaming set',
				choose: {
					num: 1,
					from: [
						'Dice Set',
						'Dragonchess Set',
						'Playing Card Set',
						'Three-Dragon Ante Set'
					]
				}
			}
		];
		this.backgroundFeatures = [
			{
				title: 'Criminal Contact',
				description: `You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.`
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
					text: 'I always have plan for what to do when things go wrong.'
				},
				{
					id: 1,
					text: 'I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.'
				},
				{
					id: 2,
					text: 'The first thing I do in a new place is note the locations of everything valuable--or where such things could be hidden.'
				},
				{
					id: 3,
					text: 'I would rather make a new friend than a new enemy.'
				},
				{
					id: 4,
					text: 'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.'
				},
				{
					id: 5,
					text: "I don't pay attention to the risks in a situation. Never tell me the odds."
				},
				{
					id: 6,
					text: "The best way to get me to do something is to tell me I can't do it."
				},
				{ id: 7, text: 'I blow up at the slightest insult.' }
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
					text: "Honor. I don't steal from others in the trade. (Lawful)"
				},
				{
					id: 1,
					text: 'Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)'
				},
				{
					id: 2,
					text: 'Charity. I steal from the wealthy so that I can help people in need. (Good)'
				},
				{
					id: 3,
					text: 'Greed. I will do whatever it takes to become wealthy. (Evil)'
				},
				{
					id: 4,
					text: "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
				},
				{
					id: 5,
					text: "Redemption. There's a spark of good in everyone. (Good)"
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
					text: "I'm trying to pay off an old debt I owe to a generous benefactor."
				},
				{ id: 1, text: 'My ill-gotten gains go to support my family.' },
				{
					id: 2,
					text: 'Something important was taken from me, and I aim to steal it back.'
				},
				{
					id: 3,
					text: 'I will become the greatest thief that ever lived.'
				},
				{
					id: 4,
					text: "I'm guilty of a terrible crime. I hope I can redeem myself for it."
				},
				{
					id: 5,
					text: 'Someone I loved died because of a mistake I made. That will never happen again.'
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
					text: "When I see something valuable, I can't think about anything but how to steal it."
				},
				{
					id: 1,
					text: 'When faced with a choice between money and my friends, I usually choose the money.'
				},
				{
					id: 2,
					text: "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it."
				},
				{ id: 3, text: "I have a 'tell' that reveals when I'm lying." },
				{ id: 4, text: 'I turn tail and run when things go bad.' },
				{
					id: 5,
					text: "An innocent person is in prison for a crime that I committed. I'm okay with that."
				}
			]
		};
	}
}
