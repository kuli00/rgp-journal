import React from 'react';

import CharacterEntry from '@/components/CharacterEntry';
import PlaceEntry from '@/components/PlaceEntry';

import { Wrapper } from './JournalEntry.styled';
import { EntriesTypes } from './JournalEntry.types';

export const JournalEntry = ({ openedEntry }) => {
  const c = 7;
  let Component;

  if (!openedEntry) return <Wrapper />;

  console.log(openedEntry);

  switch (openedEntry.type) {
    case EntriesTypes.CHARACTER:
      Component = CharacterEntry;
      break;
    case EntriesTypes.PLACE:
      Component = PlaceEntry;
      break;
    default:
      Component = null;
      break;
  }

  return <Wrapper>{openedEntry && <Component entry={openedEntry} />}</Wrapper>;
};
