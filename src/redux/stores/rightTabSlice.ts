import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  staticField: 0,
};

export const rightTabSlice = createSlice({
  name: 'rightTab',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<typeof initialState>) => {
      state = {...state, ...action.payload};
    },
  },
});

// Action creators are generated for each case reducer function
export const {setData} = rightTabSlice.actions;

export default rightTabSlice.reducer;
