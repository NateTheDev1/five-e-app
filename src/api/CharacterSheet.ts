import { RaceConstants } from "./constants";
import { BaseRace } from "./Races/BaseRace";
import { Dwarf } from "./Races/Dwarf";
import { Human } from "./Races/Human";

export class CharacterSheet {
  name: string = "";
  avatar: string = "";
  race!: BaseRace;
  class: any;
  level: number = 1;

  constructor(race: RaceConstants) {
    switch (race) {
      case RaceConstants.DWARF: {
        this.race = new Dwarf();
        break;
      }
      case RaceConstants.HUMAN: {
        this.race = new Human();
        break;
      }
    }
  }
}
