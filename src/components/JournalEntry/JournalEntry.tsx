import React from 'react';

import { Wrapper } from './JournalEntry.styled';

export const JournalEntry = ({ openedEntry }) => {
  const c = 7;

  return (
    <Wrapper>
      <pre>{openedEntry && JSON.stringify(openedEntry, null, 2)}</pre>
    </Wrapper>
  );
};
