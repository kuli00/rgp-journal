import React from 'react';

import { PlaceEntryI } from '@/components/JournalEntry/JournalEntry.types';
import {
  AdditionalInfo,
  Description,
  Property,
  ShortDescription,
  Subtitle,
  Title,
  Wrapper,
} from '@/styles/shared';

import { PlaceType } from './PlaceEntry.styled';

export const PlaceEntry = ({ entry: place }: { entry: PlaceEntryI }) => {
  console.log('place', place);
  return (
    <Wrapper>
      <Title>{place.title}</Title>
      {place.placeType && <Subtitle>{place.placeType}</Subtitle>}
      {place.localization && <Subtitle>{place.localization}</Subtitle>}
      {place.characters?.length > 0 && (
        <div>
          {place.characters.map(character => (
            <a href="/">{character.title}, </a>
          ))}
        </div>
      )}
      {place.additionalInfo && (
        <ShortDescription>{place.additionalInfo}</ShortDescription>
      )}
      <Description>{place.description}</Description>
    </Wrapper>
  );
};
