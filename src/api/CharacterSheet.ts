import { BaseClass } from "./Classes/BaseClass";
import { Fighter } from "./Classes/Fighter";
import {
  CharacterProficiencies,
  ClassConstants,
  RaceConstants,
} from "./constants";
import { BaseRace } from "./Races/BaseRace";
import { Dragonborn } from "./Races/Dragonborn";
import { Dwarf } from "./Races/Dwarf";
import { Elf } from "./Races/Elf";
import { Gnome } from "./Races/Gnome";
import { HalfElf } from "./Races/HalfElf";
import { Halfling } from "./Races/Halfling";
import { HalfOrc } from "./Races/HalfOrc";
import { Human } from "./Races/Human";
import { Tiefling } from "./Races/Tiefling";

export class CharacterSheet {
  name: string = "";
  avatar: string = "";
  race!: BaseRace;
  class_!: BaseClass;
  level: number = 1;
  proficiencies: CharacterProficiencies = [];
  fightingStyle?: { title: string; breadcrumnbId: string };

  constructor(race: RaceConstants, classInput: ClassConstants) {
    this.constructClass(classInput);
    this.constructRace(race);
  }

  constructClass(
    classInput: ClassConstants,
    fightingStyle?: { title: string; breadcrumnbId: string },
    proficiencyChoices?: CharacterProficiencies
  ) {
    switch (classInput) {
      case ClassConstants.FIGHTER: {
        this.class_ = new Fighter();

        break;
      }
    }

    this.proficiencies = [...this.proficiencies, ...this.class_.proficiencies];

    if (proficiencyChoices) {
      this.proficiencies = [...this.proficiencies, ...proficiencyChoices];
    }

    if (fightingStyle) {
      this.fightingStyle = fightingStyle;
    }
  }

  constructRace(race: RaceConstants) {
    switch (race) {
      case RaceConstants.DWARF: {
        this.race = new Dwarf();
        break;
      }
      case RaceConstants.HUMAN: {
        this.race = new Human();
        break;
      }
      case RaceConstants.GNOME: {
        this.race = new Gnome();
        break;
      }
      case RaceConstants.ELF: {
        this.race = new Elf();
        break;
      }
      case RaceConstants.DRAGONBORN: {
        this.race = new Dragonborn();
        break;
      }
      case RaceConstants.HALF_ELF: {
        this.race = new HalfElf();
        break;
      }
      case RaceConstants.HALF_ORC: {
        this.race = new HalfOrc();
        break;
      }
      case RaceConstants.HALFLING: {
        this.race = new Halfling();
        break;
      }
      case RaceConstants.TIEFLING: {
        this.race = new Tiefling();
        break;
      }
    }
  }
}
