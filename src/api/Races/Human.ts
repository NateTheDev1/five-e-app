import {
  AbilityBonus,
  RaceSize,
  Language,
  RaceTrait,
  SubRace,
  AbilityScoreConstants,
  LanguageChoices,
} from "../constants";
import { LanguageList } from "../languages";
import { BaseRace } from "./BaseRace";

export class Human implements BaseRace {
  name = "Human";
  description =
    "Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled.";
  speed = 30;
  alignment =
    "Humans tend toward no particular alignment. The best and the worst are found among them.";
  age =
    "Humans reach adulthood in their late teens and live less than a century.";
  size: RaceSize = {
    title: "Medium",
    description:
      "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
  };
  languages: Language[] = [LanguageList.common];
  languageChoices: LanguageChoices = {
    from: [
      LanguageList.dwarvish,
      LanguageList.elvish,
      LanguageList.giant,
      LanguageList.gnomish,
      LanguageList.goblin,
      LanguageList.halfling,
      LanguageList.orc,
      LanguageList.abyssal,
      LanguageList.celestial,
      LanguageList.draconic,
      LanguageList.deepSpeech,
      LanguageList.infernal,
      LanguageList.primordial,
      LanguageList.sylvan,
      LanguageList.undercommon,
    ],
    choose: 1,
  };
  languageDesc =
    "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.";
  traits: RaceTrait[] = [];
  subraces: SubRace[] = [];
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.STRENGTH, bonus: 1 },
    { title: AbilityScoreConstants.DEXTERITY, bonus: 1 },
    { title: AbilityScoreConstants.CONSTITUTION, bonus: 1 },
    { title: AbilityScoreConstants.INTELLIGENCE, bonus: 1 },
    { title: AbilityScoreConstants.WISDOM, bonus: 1 },
    { title: AbilityScoreConstants.CHARISMA, bonus: 1 },
  ];
}
