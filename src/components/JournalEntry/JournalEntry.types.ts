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
  ELF = 'Elf',
  DWARF = 'Dwarf',
  HUMAN = 'Human',
  HOBBIT = 'Hobbit',
  HALFELF = 'Half-elf',
  ORC = 'Orc',
  HALFORC = 'Half-orc',
  TIEFLING = 'Tiefling',
  SHEARIEL = 'Sheariel',
  RIEL = 'Riel',
  VIVERIEL = 'Viveriel',
  SIRIEL = 'Siriel',
  MAARIEL = 'Maariel',
  AWOKEN = 'Awoken',
  DRAGON = 'Dragon',
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

export interface CharacterEntryI extends Entry {
  class?: Classes;
  race?: Races;
  organization?: OrganisationEntryI;
  place?: PlaceEntryI;
  additionalInfo?: string;
}

export interface PlaceEntryI extends Entry {
  characters?: CharacterEntryI[];
  localization: string | PlaceEntryI;
}

export interface QuestEntryI extends Entry {
  originator: CharacterEntryI;
  price?: string;
  completed: boolean;
  recipient: CharacterEntryI | null;
}

export interface OrganisationEntryI extends Entry {
  characters?: CharacterEntryI[];
  place?: PlaceEntryI;
}

export interface Entry {
  id: string;
  title: string;
  description: string;
  type: EntriesTypes;
}

export type CombinedEntry =
  | CharacterEntryI
  | PlaceEntryI
  | QuestEntryI
  | OrganisationEntryI
  | Entry;
