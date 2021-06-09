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

export class Elf implements BaseRace {
  name = "Elf";
  description =
    "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.";
  speed = 30;
  alignment =
    "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.";
  age =
    "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.";
  size: RaceSize = {
    title: "Medium",
    description:
      "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
  };
  startingProficiencies: StartingProficiency[] = [
    { title: "Perception", breadcrumbId: "", type: "Skill" },
  ];
  languages: Language[] = [LanguageList.common, LanguageList.elvish];
  languageDesc =
    "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.";
  traits: RaceTrait[] = [
    SkillList.darkVision,
    SkillList.feyAncestry,
    SkillList.trance,
  ];
  subraces: SubRace[] = [{ title: "High Elf", breadcrumbId: "" }];
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.DEXTERITY, bonus: 2 },
  ];
}
