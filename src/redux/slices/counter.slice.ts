import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import { ConficionesAtmosfericas, City } from '../../interfaces/ConficionesAtmosfericas.interface';

// First, create the thunk
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (page: number = 1) => {
    const res = await fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?page=${page}`);
    const response = await res.json() as ConficionesAtmosfericas;
    return response;
  }
)

export const fetchCity = createAsyncThunk(
  'data/fetchCity',
  async (id: string) => {
    const res = await fetch(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?_id=${id}`);
    const response = await res.json();
    const city = response.results[0] as City;
    return city;
  }
)

interface DataState {
  data: ConficionesAtmosfericas | null;
  city: City | null;
}

const initialState: DataState = {
  data: null,
  city: null
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      state.city = action.payload
    });
  }
})

export const { } = counterSlice.actions;

export const selectData = (state: RootState) => state.data;
export default counterSlice.reducer;
