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
import { SizeList } from "../size";
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
  size: RaceSize = SizeList.medium;
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
      LanguageList.abyssall,
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
    "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.";
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
