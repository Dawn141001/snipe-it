import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {ICategory} from '../../../interface/Category.interface';

const initialState: ICategory[] = [];

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    AddCategory: (state, action: PayloadAction<ICategory>) => {
      state.push(action.payload);
      return state;
    },
    SetCategory: (state, action: PayloadAction<ICategory[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const {AddCategory, SetCategory} = CategorySlice.actions;

export const GetCategory = (state: RootState) => state.category;
export default CategorySlice.reducer;
