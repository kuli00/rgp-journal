import React from 'react';

import { CharacterEntryI } from '@/components/JournalEntry/JournalEntry.types';
import {
  AdditionalInfo,
  Description,
  Property,
  ShortDescription,
  Subtitle,
  Title,
  Wrapper,
} from '@/styles/shared';

export const CharacterEntry = ({ entry }: { entry: CharacterEntryI }) => {
  const a = 7;

  return (
    <Wrapper>
      <Title>{entry.title}</Title>
      <Subtitle>
        {`${entry.race} |`} {entry.class}
      </Subtitle>
      <AdditionalInfo>
        Organization: <Property>{entry.organization?.title}</Property>
      </AdditionalInfo>
      <AdditionalInfo>
        Place: <Property>{entry.place?.title}</Property>
      </AdditionalInfo>
      {entry.additionalInfo && (
        <ShortDescription>{entry.additionalInfo}</ShortDescription>
      )}
      <Description>{entry.description}</Description>
    </Wrapper>
  );
};
