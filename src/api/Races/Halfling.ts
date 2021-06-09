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

export class Halfling implements BaseRace {
  name = "Halfling";
  description =
    "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife.";
  speed = 25;
  alignment =
    "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.";
  age =
    "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.";
  size: RaceSize = {
    title: "Small",
    description:
      "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
  };
  languages: Language[] = [LanguageList.common, LanguageList.halfling];
  languageDesc =
    "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.";
  traits: RaceTrait[] = [
    { title: "Brave", breadcrumbId: "" },
    { title: "Halfling Nimbleness", breadcrumbId: "" },
    { title: "Lucky", breadcrumbId: "" },
  ];
  subraces: SubRace[] = [{ title: "Lightfoot Halfling", breadcrumbId: "" }];
  abilityBonuses: AbilityBonus[] = [
    { title: AbilityScoreConstants.DEXTERITY, bonus: 2 },
  ];
}
