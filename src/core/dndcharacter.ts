import phb from './phb';

import {
	EquipmentChoiceBlock,
	Race,
	Class,
	Alignment,
	Background
} from './types';
import reference from './reference';

export type EquipmentModel = {
	id: number;
	num: number;
};

export type EquipmentChoiceModel = {
	id: number;
	chosen: boolean;
	selection: number;
	remaining: number;
	items: EquipmentModel[];
	choices?: EquipmentChoiceBlock[];
};

export default class DndCharacter {
	constructor() {
		this.race = phb.races[0];
		this.class = phb.classes[0];
		this.alignment = reference.alignments[0];
		this.background = phb.backgrounds[0];
	}

	public characterName: string = '';
	public playerName: string = '';
	public race: Race;
	public class: Class;
	public archetype: number = 0;
	public alignment: Alignment;
	public backgroundSpecialty: number = 0;
	public background: Background;
	public backgroundToolChoice: string = '';
	public statArray: number[] = Array(6).fill(null);
	public statModifiers: number[] = Array(6).fill(null);
	public statTotals: number[] = Array(6).fill(null);
	public xp: number = 0;
	public languageids: number[] = [];
	public proficiencies: number[] = [];
	public equipment: EquipmentModel[] = [];
	public equipChoices: EquipmentChoiceModel[] = [];
	public trait: number = 0;
	public ideal: number = 0;
	public bond: number = 0;
	public flaw: number = 0;
	public age: string = '20';
	public height: string = "6'1";
	public weight: string = '170lbs';
	public eyes: string = 'Blue';
	public skin: string = 'Fair';
	public hair: string = 'Black';
	public appearance: any = null; // Image
	public factionLogo: any = null; // Image
	public organizations: string = '';
	public allies: string = '';
	public backstory: string = '';
	public treasure: string = '';
	public additionalFeaturesAndTraits: string = '';

	// Items moved from dndmodel
	public level: number = 1;

	public allEquipmentChosen: boolean = false;
	public allStatsAssigned: boolean = false;

	public equipmentText: string = '';

	loadFromSerialize(data: any) {
		for (const [key, val] of Object.entries(data)) {
			//@ts-ignore
			this[key] = val;
		}

		return this;
	}

	serialize() {
		return {
			characterName: this.characterName,
			playerName: '',
			race: this.race,
			class: this.class,
			archetype: this.archetype,
			alignment: this.alignment,
			backgroundSpecialty: this.backgroundSpecialty,
			background: this.background,
			backgroundToolChoice: this.backgroundToolChoice,
			statArray: this.statArray,
			statModifiers: this.statModifiers,
			statTotals: this.statTotals,
			xp: this.xp,
			languageids: this.languageids,
			proficiencies: this.proficiencies,
			equipment: this.equipment,
			equipChoices: this.equipChoices,
			trait: this.trait,
			ideal: this.ideal,
			bond: this.bond,
			flaw: this.flaw,
			age: this.age,
			height: this.height,
			weight: this.weight,
			eyes: this.eyes,
			skin: this.skin,
			hair: this.hair,
			appearance: this.appearance, // Image
			factionLogo: this.factionLogo, // Image
			organizations: this.organizations,
			allies: this.allies,
			backstory: this.backstory,
			treasure: this.treasure,
			additionalFeaturesAndTraits: this.additionalFeaturesAndTraits,

			level: this.level,

			allEquipmentChosen: this.allEquipmentChosen,
			allStatsAssigned: this.allStatsAssigned,

			equipmentText: this.equipmentText
		};
	}
}
