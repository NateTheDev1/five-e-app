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

export class Dragonborn implements BaseRace {
  name = "Dragonborn";
  description =
    "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance.";
  speed = 30;
  alignment =
    "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.";
  age =
    "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.";
  size: RaceSize = {
    title: "Medium",
    description:
      "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
  };
  startingProficiencies: StartingProficiency[] = [
    { title: "Perception", breadcrumbId: "", type: "Skill" },
  ];
  languages: Language[] = [LanguageList.common, LanguageList.draconic];
  languageDesc =
    "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.";
  traits: RaceTrait[] = [
    SkillList.draconicAncestry,
    SkillList.breathWeapon,
    SkillList.damageResistance,
  ];
  breathWeaponColor: string = "";
  subraces: SubRace[] = [];
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.STRENGTH, bonus: 2 },
    { title: AbilityScoreConstants.CHARISMA, bonus: 1 },
  ];
}
