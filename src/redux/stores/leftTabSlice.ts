import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  field1: 0,
  field2: 0,
  field3: 0,
  field4: 0,
};

export const leftTabSlice = createSlice({
  name: 'leftTab',
  initialState,
  reducers: {
    incrementField1: state => {
      state.field1++;
    },
    incrementField2: state => {
      state.field2 = state.field2 + 2;
    },
    incrementField3: state => {
      state.field3 = state.field3 + 3;
    },
    incrementField4: state => {
      state.field4 = state.field4 + 4;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementField1,
  incrementField2,
  incrementField3,
  incrementField4,
} = leftTabSlice.actions;

export default leftTabSlice.reducer;
