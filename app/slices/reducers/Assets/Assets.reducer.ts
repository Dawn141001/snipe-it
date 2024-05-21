import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {IAsset} from '../../../interface/Asset.interface';

const initialState: IAsset[] = [];

export const AssetsSlice = createSlice({
  name: 'Assets',
  initialState,
  reducers: {
    AddAssets: (state, action: PayloadAction<IAsset>) => {
      state.push(action.payload);
      return state;
    },
    DeleteAssets: (state, action: PayloadAction<IAsset>) => {
      const index = state.findIndex(el => el.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
        return state;
      }
    },
    SetAssets: (state, action: PayloadAction<IAsset[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const {AddAssets, SetAssets, DeleteAssets} = AssetsSlice.actions;

export const GetAssets = (state: RootState) => state.assets;
export default AssetsSlice.reducer;
