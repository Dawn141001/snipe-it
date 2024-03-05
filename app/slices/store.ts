import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/Auth/Auth.reducer";
import AssetsReducer from "./reducers/Assets/Assets.reducer";
import CategoryReducer from "./reducers/Category/Category.reducer";
import DetailAssetReducer from "./reducers/DetailAssets/DetailAsset.reducer";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    assets:AssetsReducer,
    category:CategoryReducer,
    detailAsset:DetailAssetReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
