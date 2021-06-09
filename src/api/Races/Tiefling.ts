import {
  AbilityBonus,
  RaceSize,
  Language,
  RaceTrait,
  SubRace,
  AbilityScoreConstants,
} from "../constants";
import { LanguageList } from "../languages";
import { SkillList } from "../skills";
import { BaseRace } from "./BaseRace";

export class Tiefling implements BaseRace {
  name = "Tiefling";
  description =
    "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. ";
  speed = 30;
  alignment =
    "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.";
  age =
    "Tieflings mature at the same rate as humans but live a few years longer.";
  size: RaceSize = {
    title: "Medium",
    description:
      "Tieflings are about the same size and build as humans. Your size is Medium.",
  };
  languages: Language[] = [LanguageList.common, LanguageList.infernal];
  languageDesc = "You can speak, read, and write Common and Infernal.";
  traits: RaceTrait[] = [
    SkillList.darkVision,
    { title: "Hellish Resistance", breadcrumbId: "" },
    { title: "Infernal Legacy", breadcrumbId: "" },
  ];
  subraces: SubRace[] = [];
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.INTELLIGENCE, bonus: 1 },
    { title: AbilityScoreConstants.CHARISMA, bonus: 2 },
  ];
}
