import { useEffect, useReducer, useRef } from 'react';

import VIEWPORTS from '@/constants/viewports';
import {
  AppContextActions,
  AppContextActionType,
  AppContextProps,
  initialState,
} from '@/context/AppContext/AppContext.types';
import { theme } from '@/styles';

import { appContextReducer } from './AppContext.reducer';

export const useAppContext = (): AppContextProps => {
  const [state, dispatch] = useReducer(appContextReducer, initialState);
  const { breakpoints } = theme;
  const { current: actions } = useRef<AppContextActions>({
    changeViewport: (newViewport: VIEWPORTS) => {
      dispatch({
        type: AppContextActionType.changeViewport,
        newViewport: newViewport,
      });
    },
    setWebpSupport: (supported: boolean) => {
      dispatch({
        type: AppContextActionType.setWebpSupport,
        supported,
      });
    },
  });

  const checkViewport = () => {
    const currentWidth = window.innerWidth;
    switch (true) {
      case currentWidth >= breakpoints.desktop:
        return actions.changeViewport(VIEWPORTS.DESKTOP);
      case currentWidth >= breakpoints.tablet:
        return actions.changeViewport(VIEWPORTS.TABLET);
      default:
        actions.changeViewport(VIEWPORTS.MOBILE);
    }
  };

  const isWebpSupported = () => {
    const img = new Image();
    img.onload = () => actions.setWebpSupport(true);
    img.onerror = () => actions.setWebpSupport(false);
    img.src =
      'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
  };

  useEffect(() => {
    isWebpSupported();
    checkViewport();
    window.addEventListener('resize', checkViewport);

    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return {
    state,
    actions,
  };
};
