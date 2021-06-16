import { CharacterBackground } from './CharacterBackgrounds';

export class Soldier extends CharacterBackground {
	constructor() {
		super();
		this.name = 'Soldier';
		this.description = `War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.

        When you choose this background, work with your DM to determine which military organization you were a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble’s or merchant’s private army, or a mercenary company.`;
		this.skillProficiencies = ['Athletics', 'Intimidation'];
		this.toolProficiencies = ['Vehicles (Land)'];
		this.gamingChoices = [
			{
				title: '',
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
				title: 'Military Rank',
				description: `You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.`
			}
		];

		this.traitsSelection = {
			roll: {
				amount: 1,
				sides: 8
			},
			selections: [
				{ id: 0, text: "I'm always polite and respectful." },
				{
					id: 1,
					text: "I'm haunted by memories of war. I can't get the images of violence out of my mind."
				},
				{
					id: 2,
					text: "I've lost too many friends, and I'm slow to make new ones."
				},
				{
					id: 3,
					text: "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation."
				},
				{
					id: 4,
					text: 'I can stare down a hellhound without flinching.'
				},
				{
					id: 5,
					text: 'I enjoy being strong and like breaking things.'
				},
				{ id: 6, text: 'I have a crude sense of humor.' },
				{
					id: 7,
					text: 'I face problems head-on. A simple direct solution is the best path to success.'
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
					text: 'Greater Good. Our lot is to lay down our lives in defense of others. (Good)'
				},
				{
					id: 1,
					text: 'Responsibility. I do what I must and obey just authority. (Lawful)'
				},
				{
					id: 2,
					text: 'Independence. When people follow orders blindly they embrace a kind of tyranny. (Chaotic)'
				},
				{
					id: 3,
					text: 'Might. In life as in war, the stronger force wins. (Evil)'
				},
				{
					id: 4,
					text: "Ideals aren't worth killing for or going to war for. (Neutral)"
				},
				{
					id: 5,
					text: 'Nation. My city, nation, or people are all that matter. (Any)'
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
					text: 'I would lay down my life for the people I served with.'
				},
				{
					id: 1,
					text: 'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.'
				},
				{ id: 2, text: 'My honor is my life.' },
				{
					id: 3,
					text: "I'll never forget the crushing defeat my company suffered or the enemies who dealt it."
				},
				{
					id: 4,
					text: 'Those who fight beside me are those worth dying for.'
				},
				{
					id: 5,
					text: 'I fight for those who cannot fight for themselves.'
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
					text: 'The monstrous enemy we faced in battle still leaves me quivering with fear.'
				},
				{
					id: 1,
					text: 'I have little respect for anyone who is not a proven warrior.'
				},
				{
					id: 2,
					text: 'I made a terrible mistake in battle that cost many lives--and I would do anything to keep that mistake secret.'
				},
				{
					id: 3,
					text: 'My hatred of my enemies is blind and unreasoning.'
				},
				{
					id: 4,
					text: 'I obey the law, even if the law causes misery.'
				},
				{
					id: 5,
					text: "I'd rather eat my armor than admit when I'm wrong."
				}
			]
		};
	}
}
