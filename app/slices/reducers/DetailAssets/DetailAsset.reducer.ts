import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import { IAsset } from '../../../interface/Asset.interface';

const initialState: IAsset = {};

export const DetailAssetSlice = createSlice({
  name: 'DetailAsset',
  initialState,
  reducers: {
    SetDetailAsset: (state, action: PayloadAction<IAsset>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { SetDetailAsset} = DetailAssetSlice.actions;

export const GetDetailAsset = (state: RootState) => state.detailAsset;
export default DetailAssetSlice.reducer;
