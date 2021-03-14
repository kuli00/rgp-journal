import React from 'react';

import { useCategoryList } from '@/components/CategoryList/CategoryList.hook';
import { CategoryListProps } from '@/components/CategoryList/CategoryList.types';

import {
  Category,
  CategoryName,
  EntriesList,
  Entry,
  Wrapper,
} from './CategoryList.styled';

export const CategoryList = ({ categories, openEntry }: CategoryListProps) => {
  const { openedCategories, toggleCategory } = useCategoryList();

  return (
    <Wrapper>
      {categories.map((category, categoryKey) => (
        <Category key={category.name}>
          <CategoryName
            opened={openedCategories.includes(categoryKey)}
            onClick={() => toggleCategory(categoryKey)}
            isOpenable={category.entries?.length > 0}
          >
            {category.name} ({category.entries?.length || 0})
          </CategoryName>
          {category.entries?.length > 0 && (
            <EntriesList
              opened={openedCategories.includes(categoryKey)}
              elements={category.entries.length}
            >
              {category.entries.map(entry => (
                <Entry key={entry.title} onClick={() => openEntry(entry)}>
                  {entry.title}
                </Entry>
              ))}
            </EntriesList>
          )}
        </Category>
      ))}
    </Wrapper>
  );
};
