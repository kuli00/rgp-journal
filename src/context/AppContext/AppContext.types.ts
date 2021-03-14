export const initialState = {};

export enum AppContextActionType {
  changeViewport,
  setWebpSupport,
}

export type AppContextAction =
  | {
      type: AppContextActionType.changeViewport;
      newViewport: VIEWPORTS;
    }
  | {
      type: AppContextActionType.setWebpSupport;
      supported: boolean;
    };

export interface AppContextActions {
  changeViewport: (newViewport: VIEWPORTS) => void;
  setWebpSupport: (supported: boolean) => void;
}

export interface AppContextState {
  webpSupport: boolean;
  viewport: VIEWPORTS;
}

export interface AppContextProps {
  state: AppContextState;
  actions: AppContextActions;
}
