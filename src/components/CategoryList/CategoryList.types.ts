import { Entry } from '@/components/JournalEntry/JournalEntry.types';
export interface Category {
  name: string;
  subCategories?: Category[];
  entries?: Entry[];
}

export interface CategoryListProps {
  categories: Category[];
  openEntry: (entry: Entry) => void;
}
