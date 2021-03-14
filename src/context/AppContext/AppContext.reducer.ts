import {
  AppContextAction,
  AppContextActionType,
  AppContextState,
} from './AppContext.types';

export const appContextReducer = (
  state: AppContextState,
  action: AppContextAction,
): AppContextState => {
  switch (action.type) {
    case AppContextActionType.changeViewport:
      return {
        ...state,
        viewport: action.newViewport,
      };
    case AppContextActionType.setWebpSupport:
      return {
        ...state,
        webpSupport: action.supported,
      };
    default:
      return state;
  }
};
