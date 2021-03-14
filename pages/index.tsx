import React, { useState } from 'react';

import { entries } from '@/../constants';
import CategoryList from '@/components/CategoryList';
import ContentWrapper from '@/components/ContentWrapper';
import JournalEntry from '@/components/JournalEntry';
import { Entry } from '@/components/JournalEntry/JournalEntry.types';

const Journal = () => {
  const buildCategories = () => {
    const createCategory = (name: string) => ({
      name,
      entries: [],
    });

    const categories = [
      // [0]
      createCategory('Characters'),
      // [1]
      createCategory('Places'),
      // [2]
      createCategory('Quests'),
      // [3]
      createCategory('Notes'),
      // [4]
      createCategory('Items'),
      // [5]
      createCategory('Organizations'),
    ];

    entries.forEach(entry => {
      categories[entry.type.toString()].entries.push(entry);
    });

    categories.forEach(category => {
      category.entries.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    });

    return categories;
  };

  const [openedEntry, setOpenedEntry] = useState<Entry | null>(null);

  return (
    <ContentWrapper>
      <CategoryList
        categories={buildCategories()}
        openEntry={(entry: Entry) => setOpenedEntry(entry)}
      />
      <JournalEntry openedEntry={openedEntry} />
    </ContentWrapper>
  );
};

export default Journal;
