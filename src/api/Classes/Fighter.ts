import {
  AbilityScoreConstants,
  StartingProficiency,
  StartingProficiencyChoices,
  StartingEquipmentOptions,
} from "../constants";
import { BaseClass } from "./BaseClass";

import fighterjson from "./levels-json/fighter.levels.json";

export class Fighter implements BaseClass {
  name = "Fighter";
  description =
    "A master of martial combat, skilled with a variety of weapons and armor";
  hitDice = 10;
  proficiencyChoices: StartingProficiencyChoices = {
    from: [
      {
        title: "Skill: Acrobatics",
        breadcrumbId: "",
      },
      {
        title: "Skill: Animal Handling",
        breadcrumbId: "",
      },
      {
        title: "Skill: Athletics",
        breadcrumbId: "",
      },
      {
        title: "Skill: History",
        breadcrumbId: "",
      },
      {
        title: "Skill: Insight",
        breadcrumbId: "",
      },
      {
        title: "Skill: Intimidation",
        breadcrumbId: "",
      },
      {
        title: "Skill: Perception",
        breadcrumbId: "",
      },
      {
        title: "Skill: Survival",
        breadcrumbId: "",
      },
    ],
    choose: 2,
  };
  proficiencies: StartingProficiency[] = [
    { title: "All armor", breadcrumbId: "" },
    { title: "Shields", breadcrumbId: "" },
    { title: "Simple Weapons", breadcrumbId: "" },
    { title: "Martial Weapons", breadcrumbId: "" },
  ];
  savingThrows = [
    { title: AbilityScoreConstants.STRENGTH, breadcrumbId: "" },
    { title: AbilityScoreConstants.CONSTITUTION, breadcrumbId: "" },
  ];
  fightingStyleChoices: {
    choose: number;
    from: { title: string; breadcrumbId: string }[];
  } = {
    choose: 1,
    from: [
      { title: "Archery", breadcrumbId: "" },
      { title: "Defense", breadcrumbId: "" },
      { title: "Dueling", breadcrumbId: "" },
      { title: "Great Weapon Fighting", breadcrumbId: "" },
      { title: "Protection", breadcrumbId: "" },
      { title: "Two Weapon Fighting", breadcrumbId: "" },
    ],
  };
  startingEquipment = [];
  startingEquipmentOptions: StartingEquipmentOptions = [
    {
      choose: 1,
      from: [
        {
          title: "Chain Mail",
          breadcrumbId: "",
          quantity: 1,
        },
        [
          { title: "Leather", breadcrumbId: "", quantity: 1 },
          { title: "Longbow", breadcrumbId: "", quantity: 1 },
          { title: "Arrow", breadcrumbId: "", quantity: 20 },
        ],
      ],
    },
    {
      choose: 1,
      from: [
        [
          { title: "Shield", breadcrumbId: "", quantity: 1 },
          { title: "Any Martial Weapon", breadcrumbId: "", quantity: 1 },
        ],
        {
          title: "Any Martial Weapons",
          quantity: 2,
          breadcrumbId: "",
        },
      ],
    },
    {
      choose: 1,
      from: [
        {
          title: "Handaxe",
          breadcrumbId: "",
          quantity: 2,
        },
        [
          {
            title: "Crossbow, Light",
            breadcrumbId: "",
            quantity: 1,
          },
          {
            title: "Crossbow Bolt",
            breadcrumbId: "",
            quantity: 20,
          },
        ],
      ],
    },
    {
      choose: 1,
      from: [
        { title: "Dungeoneers Pack", breadcrumbId: "", quantity: 1 },
        { title: "Explorers Pack", breadcrumbId: "", quantity: 1 },
      ],
    },
  ];
  subClasses = [{ title: "Champion", breadcrumbId: "" }];

  getLevelData(level: number): any {
    return fighterjson.find((el) => el.level === level);
  }
}
