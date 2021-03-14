import React from 'react';

import { CharacterEntryI } from '@/components/JournalEntry/JournalEntry.types';

import {
  AdditionalInfo,
  CharacterName,
  Description,
  Property,
  ShortDescription,
  Wrapper,
} from './CharacterEntry.styled';

export const CharacterEntry = ({ entry }: { entry: CharacterEntryI }) => {
  const a = 7;

  return (
    <Wrapper>
      <CharacterName>{entry.title}</CharacterName>
      <AdditionalInfo>
        Race: <Property>{entry.race}</Property>
      </AdditionalInfo>
      <AdditionalInfo>
        Organization: <Property>{entry.organization?.title}</Property>
      </AdditionalInfo>
      <AdditionalInfo>
        Class: <Property>{entry.class}</Property>
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
