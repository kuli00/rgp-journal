import { useState } from 'react';

export const useCategoryList = () => {
  const [openedCategories, setOpenedCategories] = useState<number[]>([]);

  const openCategory = (categoryId: number) => {
    setOpenedCategories(prevState => [...prevState, categoryId]);
  };

  const closeCategory = (stateCategoryId: number) => {
    setOpenedCategories(prevState => {
      const newState = [...prevState];
      newState.splice(stateCategoryId, 1);
      return newState;
    });
  };

  const toggleCategory = (categoryId: number) => {
    const stateCategoryId = openedCategories.indexOf(categoryId);

    if (stateCategoryId >= 0) {
      return closeCategory(stateCategoryId);
    }

    return openCategory(categoryId);
  };

  return {
    openedCategories,
    toggleCategory,
  };
};
