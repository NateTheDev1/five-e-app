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
import { SkillList } from "../skills";
import { BaseRace } from "./BaseRace";

export class Gnome implements BaseRace {
  name = "Gnome";
  description =
    "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.";
  speed = 25;
  alignment =
    "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.";
  age =
    "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.";
  size: RaceSize = {
    title: "Small",
    description:
      "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
  };
  languages: Language[] = [LanguageList.common, LanguageList.gnomish];
  languageChoices: LanguageChoices = {
    from: [],
    choose: 1,
  };
  languageDesc =
    "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.";
  traits: RaceTrait[] = [SkillList.darkVision, SkillList.gnomeCunning];
  subraces: SubRace[] = [{ title: "Rock Gnome", breadcrumbId: "" }];
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.INTELLIGENCE, bonus: 2 },
  ];
}
