export enum RaceConstants {
  DWARF = "DWARF",
  HUMAN = "HUMAN",
}

export enum AbilityScoreConstants {
  CONSTITUTION = "CONSTITUTION",
  DEXTERITY = "DEXTERITY",
  STRENGTH = "STRENGTH",
  INTELLIGENCE = "INTELLIGENCE",
  WISDOM = "WISDOM",
  CHARISMA = "CHARISMA",
}

export enum ClassConstants {}

export type RaceSize = { title: string; description: string };
export type RaceTrait = { title: string; breadcrumbId: number };
export type SubRace = { title: string; breadcrumbId: number };
export type AbilityBonus = { title: string; bonus: number };
export type StartingProficiency = {
  title: string;
  breadcrumbId: number;
  type?: string;
};
export type Language = { name: string; breadcumbId: number };

export type StartingProficiencyChoices = {
  from: StartingProficiency[];
  choose: number;
};

export type LanguageChoices = {
  from: Language[];
  choose: number;
};
