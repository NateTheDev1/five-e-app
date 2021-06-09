import {
  AbilityBonus,
  RaceSize,
  Language,
  RaceTrait,
  SubRace,
  AbilityScoreConstants,
  LanguageChoices,
  StartingProficiency,
} from "../constants";
import { LanguageList } from "../languages";
import { SkillList } from "../skills";
import { BaseRace } from "./BaseRace";

export class HalfOrc implements BaseRace {
  name = "Half-Orc";
  description =
    "Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.";
  speed = 30;
  alignment =
    "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.";
  age =
    "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.";
  size: RaceSize = {
    title: "Medium",
    description:
      "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
  };
  startingProficiencies: StartingProficiency[] = [
    { title: "Skill: Intimidation", breadcrumbId: "" },
  ];
  languages: Language[] = [LanguageList.common, LanguageList.orc];
  languageDesc =
    "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.";
  traits: RaceTrait[] = [
    SkillList.darkVision,
    { title: "Savage Attacks", breadcrumbId: "" },
    { title: "Relentless Endurance", breadcrumbId: "" },
  ];
  subraces: SubRace[] = [];
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.STRENGTH, bonus: 2 },
    { title: AbilityScoreConstants.CONSTITUTION, bonus: 1 },
  ];
}
