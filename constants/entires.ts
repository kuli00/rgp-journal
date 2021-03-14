import {
  EntriesTypes,
  Entry,
  Races,
} from '@/components/JournalEntry/JournalEntry.types';

const entries: Entry[] = [
  {
    id: '1',
    title: 'Xander',
    type: EntriesTypes.CHARACTER,
    description: 'dupa cycki',
    typeFields: {
      race: Races.DWARF,
    },
  },
  {
    id: '2',
    title: 'Ulira',
    type: EntriesTypes.CHARACTER,
    description: 'hitler stalin',
    typeFields: {
      race: Races.TIEFLING,
    },
  },
];

export default entries;
