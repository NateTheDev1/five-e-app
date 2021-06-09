import {
  AbilityBonus,
  RaceSize,
  Language,
  RaceTrait,
  SubRace,
  AbilityScoreConstants,
  StartingProficiency,
} from "../constants";
import { LanguageList } from "../languages";
import { SkillList } from "../skills";
import { BaseRace } from "./BaseRace";

export class HalfElf implements BaseRace {
  name = "Half-Elf";
  description =
    "Half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. ";
  speed = 30;
  alignment =
    "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.";
  age =
    "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.";
  size: RaceSize = {
    title: "Medium",
    description:
      "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
  };
  startingProficiencies: StartingProficiency[] = [];
  startingProficiencyChoices = {
    from: [
      { title: "Skill: Acrobatics", breadcrumbId: "" },
      { title: "Skill: Animal Handling", breadcrumbId: "" },
      { title: "Skill: Arcana", breadcrumbId: "" },
      { title: "Skill: Athletics", breadcrumbId: "" },
      { title: "Skill: Deception", breadcrumbId: "" },
      { title: "Skill: History", breadcrumbId: "" },
      { title: "Skill: Insight", breadcrumbId: "" },
      { title: "Skill: Intimidation", breadcrumbId: "" },
      { title: "Skill: Investigation", breadcrumbId: "" },
      { title: "Skill: Medicine", breadcrumbId: "" },
      { title: "Skill: Nature", breadcrumbId: "" },
      { title: "Skill: Perception", breadcrumbId: "" },
      { title: "Skill: Performance", breadcrumbId: "" },
      { title: "Skill: Persuasion", breadcrumbId: "" },
      { title: "Skill: Religion", breadcrumbId: "" },
      { title: "Skill: Sleight Of Hand", breadcrumbId: "" },
      { title: "Skill: Stealth", breadcrumbId: "" },
      { title: "Skill: Survival", breadcrumbId: "" },
    ],
    choose: 2,
  };
  languages: Language[] = [LanguageList.common, LanguageList.elvish];
  languageChoices = {
    from: [
      LanguageList.dwarvish,
      LanguageList.giant,
      LanguageList.gnomish,
      LanguageList.goblin,
      LanguageList.halfling,
      LanguageList.orc,
      LanguageList.abyssal,
      LanguageList.celestial,
      LanguageList.draconic,
      LanguageList.infernal,
      LanguageList.primordial,
      LanguageList.sylvan,
      LanguageList.undercommon,
    ],
    choose: 1,
  };
  languageDesc =
    "You can speak, read, and write Common, Elvish, and one extra language of your choice.";
  traits: RaceTrait[] = [
    SkillList.darkVision,
    SkillList.feyAncestry,
    SkillList.skillVersatality,
  ];
  subraces: SubRace[] = [];
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.CHARISMA, bonus: 2 },
  ];
  abilityBonusOptions!: {
    from: [
      { title: AbilityScoreConstants.STRENGTH; bonus: 1 },
      { title: AbilityScoreConstants.DEXTERITY; bonus: 1 },
      { title: AbilityScoreConstants.CONSTITUTION; bonus: 1 },
      { title: AbilityScoreConstants.INTELLIGENCE; bonus: 1 },
      { title: AbilityScoreConstants.WISDOM; bonus: 1 }
    ];
    choose: 2;
  };
}
