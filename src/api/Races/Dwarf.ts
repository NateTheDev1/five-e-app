import {
  AbilityBonus,
  RaceSize,
  Language,
  RaceTrait,
  SubRace,
  StartingProficiency,
  StartingProficiencyChoices,
  AbilityScoreConstants,
} from "../constants";
import { LanguageList } from "../languages";
import { SkillList } from "../skills";
import { BaseRace } from "./BaseRace";

export class Dwarf implements BaseRace {
  name = "Dwarf";
  description =
    "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller";
  speed = 25;
  alignment =
    "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.";
  age = "";
  size: RaceSize = {
    title: "Medium",
    description:
      "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
  };
  languages: Language[] = [LanguageList.common, LanguageList.dwarvish];
  languageDesc =
    "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.";
  traits: RaceTrait[] = [
    SkillList.darkVision,
    { title: "Dwarven Resilience", breadcrumbId: "" },
    { title: "Stonecunning", breadcrumbId: "" },
    { title: "Dwarven Combat Training", breadcrumbId: "" },
    { title: "Tool Proficiency", breadcrumbId: "" },
  ];
  subraces: SubRace[] = [{ title: "Hill Dwarf", breadcrumbId: "" }];
  startingProficiencies: StartingProficiency[] = [
    { title: "Battleaxes", breadcrumbId: "" },
    { title: "Handaxes", breadcrumbId: "" },
    { title: "Light hammers", breadcrumbId: "" },
    { title: "Warhammers", breadcrumbId: "" },
  ];
  startingProficiencyChoices: StartingProficiencyChoices = {
    from: [
      { title: "Smith's tools", breadcrumbId: "" },
      { title: "Brewer's supplies", breadcrumbId: "" },
      { title: "Mason's Tools", breadcrumbId: "" },
    ],
    choose: 1,
  };
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.CONSTITUTION, bonus: 2 },
  ];
}
