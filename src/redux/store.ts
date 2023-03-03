import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './slices/counter.slice';

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
