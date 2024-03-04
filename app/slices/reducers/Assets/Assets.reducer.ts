import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import { IAsset } from '../../../interface/Asset.interface';

const initialState: IAsset[] = [];

export const AssetsSlice = createSlice({
  name: 'Assets',
  initialState,
  reducers: {
    AddAssets: (state, action: PayloadAction<IAsset>) => {
      state.push(action.payload);
      return state;
    },
    // UpdateAssets: (state, action: PayloadAction<IAsset>) => {
    //   const index = state.findIndex(el => el.id === action.payload.id);
    //   if (index > -1) {
    //     state[index] = {
    //       ...state[index],
    //       title: action.payload.title,
    //       metaDescription: action.payload.metaDescription,
    //       content: action.payload.content,
    //       photoURL: action.payload.photoURL,
    //       categoryAssetsId: action.payload.categoryAssetsId,
    //     };
    //     return state;
    //   }
    // },
    // PutAssets: (state, action: PayloadAction<IAsset>) => {
    //   const index = state.findIndex(el => el.id === action.payload.id);
    //   if (index > -1) {
    //     state[index] = {
    //       ...state[index],
    //       title: action.payload.title,
    //       metaDescription: action.payload.metaDescription,
    //       content: action.payload.content,
    //       photoURL: action.payload.photoURL,
    //       categoryAssetsId: action.payload.categoryAssetsId,
    //     };
    //     return state;
    //   } else {
    //     state.push(action.payload);
    //     return state;
    //   }
    // },
    // DeleteAssets: (state, action: PayloadAction<IAsset>) => {
    //   const index = state.findIndex(el => el.id === action.payload.id);
    //   if (index > -1) {
    //     state.splice(index, 1);
    //     return state;
    //   }
    // },
    SetAssets: (state, action: PayloadAction<IAsset[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const {AddAssets, SetAssets} =
  AssetsSlice.actions;

export const GetAssets = (state: RootState) => state.assets;
export default AssetsSlice.reducer;
