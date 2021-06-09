import {
  Language,
  RaceSize,
  RaceTrait,
  SubRace,
  AbilityBonus,
  StartingProficiency,
  StartingProficiencyChoices,
  LanguageChoices,
} from "../constants";

export class BaseRace {
  name!: string;
  description!: string;
  speed!: number;
  alignment!: string;
  age!: string;
  size!: RaceSize;
  languages!: Language[];
  languageChoices?: LanguageChoices;
  languageDesc?: string;
  traits!: RaceTrait[];
  subraces!: SubRace[];
  startingProficiencies?: StartingProficiency[];
  startingProficiencyChoices?: StartingProficiencyChoices;
  abilityBonuses!: AbilityBonus[];
  avatar?: string;
}
