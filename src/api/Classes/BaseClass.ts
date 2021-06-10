import {
  StartingEquipmentOptions,
  StartingProficiency,
  StartingProficiencyChoices,
} from "../constants";

export class BaseClass {
  name!: string;
  description!: string;
  hitDice!: number;
  proficiencyChoices!: StartingProficiencyChoices;
  proficiencies!: StartingProficiency[];
  savingThrows!: { title: string; breadcrumbId: string }[];
  startingEquipment = [];
  startingEquipmentOptions!: StartingEquipmentOptions;
  subClasses!: { title: string; breadcrumbId: string }[];
}
