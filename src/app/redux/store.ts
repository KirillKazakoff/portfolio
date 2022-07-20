/* eslint-disable @typescript-eslint/indent */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import loaderReducer from './loaderSlice';
import popupReducer from './popupSlice';

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        language: languageReducer,
        loader: loaderReducer,
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
