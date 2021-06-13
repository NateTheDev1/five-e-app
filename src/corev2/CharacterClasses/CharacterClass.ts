import { StatConstants } from '../Race';

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
		skills?: boolean;
	}[] = [];
	public traits: { title: string; description: string; atLevel: number }[] =
		[];
	public equipmentChoices?: {
		title: string;
		choose?: {
			num: number;
			from: (
				| { name: string; quantity: number; groupType?: string }
				| {
						items: {
							name: string;
							quantity: number;
							groupType?: string;
						}[];
				  }
			)[];
			type?: string;
		};
		quantity?: number;
	}[] = [];
	public languages: string[] = [];
}
