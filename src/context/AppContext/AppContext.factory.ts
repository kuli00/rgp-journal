import { createContext } from 'react';

import VIEWPORTS from '@/constants/viewports';

import { AppContextProps } from './AppContext.types';

export const AppContext = createContext<AppContextProps>({
  state: {
    webpSupport: false,
    viewport: VIEWPORTS.MOBILE,
  },
});
