/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type AnimationStatusT = 'idle' | 'loading' | 'loaded' | 'failed';

type StateT = {
    isPageLoaded: boolean;
    isAnimated: AnimationStatusT;
};

const initialState: StateT = {
    isPageLoaded: false,
    isAnimated: 'idle',
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setPageStatus: (state, action: PayloadAction<boolean>) => {
            state.isPageLoaded = action.payload;
        },
        setAnimationStatus: (state, action: PayloadAction<AnimationStatusT>) => {
            state.isAnimated = action.payload;
        },
    },
});

export const { setPageStatus, setAnimationStatus } = loaderSlice.actions;
export const selectPageStatus = (state: RootState) => state.loader.isPageLoaded;
export const selectAnimationStatus = (state: RootState) => state.loader.isAnimated;

export default loaderSlice.reducer;
