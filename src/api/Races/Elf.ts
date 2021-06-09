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
import { SizeList } from "../size";
import { SkillList } from "../skills";
import { BaseRace } from "./BaseRace";

export class Elf implements BaseRace {
  name = "Elf";
  description =
    "Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled.";
  speed = 30;
  alignment =
    "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.";
  age =
    "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.";
  size: RaceSize = SizeList.medium;
  startingProficiencies: StartingProficiency[] = [
    { title: "Perception", breadcrumbId: -1, type: "Skill" },
  ];
  languages: Language[] = [LanguageList.common, LanguageList.elvish];
  languageDesc =
    "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.";
  traits: RaceTrait[] = [
    SkillList.darkVision,
    SkillList.feyAncestry,
    SkillList.trance,
  ];
  subraces: SubRace[] = [{ title: "High Elf", breadcrumbId: -1 }];
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.DEXTERITY, bonus: 2 },
  ];
}
