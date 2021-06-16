import { CharacterBackground } from './CharacterBackgrounds';

export class Acolyte extends CharacterBackground {
	constructor() {
		super();

		this.name = 'Acolyte';
		this.description = `You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power.

        Choose a god, a pantheon of gods, or some other quasi-divine being, and work with your DM to detail the nature of your religious service. The Gods of the Multiverse section contains a sample pantheon, from the Forgotten Realms setting. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny. `;
		this.skillProficiencies = ['Insight', 'Religion'];
		this.languagesChoices = [
			{
				title: 'Select 2 additional languages',
				choose: {
					num: 2,
					from: [],
					all: true
				}
			}
		];
		this.backgroundFeatures = [
			{
				title: 'Shelter of the Faithful',
				description: `As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.

                You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.`
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
					text: "I idolize a parlicular hero of my faith, and constantly refer to that person's deeds and example."
				},
				{
					id: 1,
					text: 'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.'
				},
				{
					id: 2,
					text: 'I see omens in every event and action. The gods try to speak to us, we just need to listen.'
				},
				{ id: 3, text: 'Nothing can shake my optimistic attitude.' },
				{
					id: 4,
					text: 'I quote (or misquote) the sacred texts and proverbs in almost every situation.'
				},
				{
					id: 5,
					text: 'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.'
				},
				{
					id: 6,
					text: "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me."
				},
				{
					id: 7,
					text: "I've spent so long in the temple that I have little practical experience dealing with people in the outside world."
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
					text: 'Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)'
				},
				{
					id: 1,
					text: 'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)'
				},
				{
					id: 2,
					text: 'Charity. I always try to help those in need, no matter what the personal cost. (Good)'
				},
				{
					id: 3,
					text: 'Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)'
				},
				{
					id: 4,
					text: "Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)"
				},
				{
					id: 5,
					text: "Aspiration. I seek to prove my self worthy of my god's favor by matching my actions against his or her teachings. (Any)"
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
					text: 'I would die to recover an ancient artifact of my faith that was lost long ago.'
				},
				{
					id: 1,
					text: 'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.'
				},
				{
					id: 2,
					text: 'I owe me life to the priest who took me in when my parents died.'
				},
				{ id: 3, text: 'Everything I do is for the common people.' },
				{
					id: 4,
					text: 'I will do anything to protect the temple where I served.'
				},
				{
					id: 5,
					text: 'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.'
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
					text: 'I judge others harshly, and myself even more severely.'
				},
				{
					id: 1,
					text: "I put too much trust in those who wield power within my temple's hierarchy."
				},
				{
					id: 2,
					text: 'My piety sometimes leads me to blindly trust those that profess faith in my god.'
				},
				{ id: 3, text: 'I am inflexible in my thinking.' },
				{
					id: 4,
					text: 'I am suspicious of strangers and suspect the worst of them.'
				},
				{
					id: 5,
					text: 'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.'
				}
			]
		};
	}
}
