import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {repeated} from '../context/LeftTabContext';
import uuid from 'react-native-uuid';

type Space = {
  planet: string;
  image: string;
  id: string;
};

export type Data = {
  data?: Space[];
  loading: boolean;
  refetch: () => void;
};

const initialState: Data = {
  data: undefined,
  loading: true,
  refetch: () => {},
};

export const counterSlice = createSlice({
  name: 'leftTab',
  initialState,
  reducers: {
    setHook: (state, action: PayloadAction<Data>) => {
      state.data = action.payload.data;
      state.loading = action.payload.loading;
      state.refetch = action.payload.refetch;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setHook} = counterSlice.actions;

export default counterSlice.reducer;

// Define a thunk that dispatches those action creators
export const reset = dispatch => async () => {
  dispatch(
    setHook({
      data: undefined,
      loading: true,
      refetch: () => {},
    }),
  );
  const response = await new Promise<Data['data']>(resolve => {
    resolve(repeated);
  });
  dispatch(
    setHook({
      data: response,
      loading: false,
      refetch: () => {},
    }),
  );
};

export const deleteItem =
  (data: Data['data'], dispatch) => async (planet: string) => {
    const filtered = data?.filter(i => planet !== i.planet);
    const response = await new Promise<Data['data']>(resolve => {
      resolve(filtered);
    });
    dispatch(
      setHook({
        data: response,
        loading: false,
        refetch: () => {},
      }),
    );
  };

export const createItem =
  async (data: Data['data'], planet: string, image: string, dispatch) =>
  async () => {
    const created = [
      ...(data || []),
      {
        planet,
        image,
        id: uuid.v4(),
      },
    ];
    const response = await new Promise<Data['data']>(resolve => {
      resolve(created);
    });
    dispatch(
      setHook({
        data: response,
        loading: false,
        refetch: () => reset(),
      }),
    );
  };
