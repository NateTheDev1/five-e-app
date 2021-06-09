export enum RaceConstants {
  DWARF = "DWARF",
  HUMAN = "HUMAN",
  ELF = "ELF",
  GNOME = "GNOME",
  DRAGONBORN = "DRAGONBORN",
  HALF_ELF = "HALF_ELF",
  HALF_ORC = "HALF_ORC",
  HALFLING = "HALFLING",
  TIEFLING = "TIEFLING",
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
export type RaceTrait = { title: string; breadcrumbId: string };
export type SubRace = { title: string; breadcrumbId: string };
export type AbilityBonus = { title: string; bonus: number };
export type StartingProficiency = {
  title: string;
  breadcrumbId: string;
  type?: string;
};
export type Language = { name: string; breadcumbId: string };

export type StartingProficiencyChoices = {
  from: StartingProficiency[];
  choose: number;
};

export type LanguageChoices = {
  from: Language[];
  choose: number;
};

export type AbilityBonusChoices = {
  from: AbilityBonus[];
  choose: number;
};
