/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = {
    isHidden: true,
};

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        showPopup: (state) => {
            state.isHidden = !state.isHidden;
        },
        hidePopup: (state) => {
            state.isHidden = true;
        },
    },
});

export const { showPopup, hidePopup } = popupSlice.actions;
export const selectPopupStatus = (state: RootState) => state.popup.isHidden;

export default popupSlice.reducer;
