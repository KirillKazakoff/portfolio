/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { myDictionary } from './dictionary';
import type { RootState } from './store';

const initialState = {
    value: 'eng',
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export const selectDic = (state: RootState) => myDictionary[state.language.value];
export const selectLanguage = (state: RootState) => state.language.value;

export default languageSlice.reducer;
