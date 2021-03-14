import React from 'react';

import CharacterEntry from '@/components/CharacterEntry';

import { Wrapper } from './JournalEntry.styled';

export const JournalEntry = ({ openedEntry }) => {
  const c = 7;

  return (
    <Wrapper>{openedEntry && <CharacterEntry entry={openedEntry} />}</Wrapper>
  );
};
