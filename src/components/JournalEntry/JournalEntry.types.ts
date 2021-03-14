import { Category } from '@/components/CategoryList/CategoryList.types';

export enum EntriesTypes {
  CHARACTER,
  PLACE,
  QUEST,
  NOTE,
  ITEM,
  ORGANIZATION,
}

export enum Races {
  ELF,
  DWARF,
  HUMAN,
  HOBBIT,
  HALFELF,
  ORC,
  HALFORC,
  TIEFLING,
  SHEARIEL,
  RIEL,
  VIVERIEL,
  SIRIEL,
  MAARIEL,
  AWOKEN,
  DRAGON,
}

export enum Classes {
  ARTIFICER,
  BARD,
  BARBARIAN,
  CLERIC,
  DRUID,
  FIGHTER,
  MONK,
  PALADIN,
  RANGER,
  ROGUE,
  SORCERER,
  WARLOCK,
  WIZZARD,
  MERCHANT,
  NOBLE,
  CRAFTSMAN,
  COMMONER,
  SCHOLAR,
  CRIMINAL,
}

export interface CharacterEntryI {
  class?: Classes;
  race?: Races;
  organization?: string;
  place?: PlaceEntryI;
}

export interface PlaceEntryI {
  characters?: CharacterEntryI[];
  localization: string | PlaceEntryI;
}

export interface QuestEntryI {
  originator: CharacterEntryI;
  price?: string;
  completed: boolean;
  recipient: CharacterEntryI | null;
}

export interface OrganisationEntryI {
  characters?: CharacterEntryI[];
  place?: PlaceEntryI;
}

export interface Entry {
  id: string;
  title: string;
  description: string;
  type: EntriesTypes;
  typeFields: CharacterEntryI | PlaceEntryI | QuestEntryI | OrganisationEntryI;
}
