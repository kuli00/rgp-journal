import React, { FC } from 'react';

import { AppContext } from './AppContext.factory';
import { useAppContext } from './AppContext.hook';

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const value = useAppContext();
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
