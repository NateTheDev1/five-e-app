export class CharacterBackground {
	public name: string = '';
	public description: string = '';
	public languagesChoices?: {
		title: string;
		choose: { num: number; from: string[]; all?: boolean };
	}[];
	public gamingChoices?: {
		title: string;
		choose: { num: number; from: string[]; all?: boolean };
	}[];
	public equipmentChoices?: {
		title: string;
		choose: { num: number; from: string[]; all?: boolean };
	}[];
	public skillProficiencies?: string[] = [];
	public skillProficiencyChoices?: {
		title: string;
		choose: { num: number; from: string[]; all?: boolean };
	}[];
	public toolProficiencies: string[] = [];
	public backgroundFeatures: { title: string; description: string }[] = [];

	public traitsSelection?: {
		roll: { sides: number; amount: number };
		selections: { id?: number; text: string }[];
	};
	public idealsSelection?: {
		roll: { sides: number; amount: number };
		selections: { id?: number; text: string }[];
	};
	public bondsSelection?: {
		roll: { sides: number; amount: number };
		selections: { id?: number; text: string }[];
	};
	public flawsSelection?: {
		roll: { sides: number; amount: number };
		selections: { id?: number; text: string }[];
	};
}
