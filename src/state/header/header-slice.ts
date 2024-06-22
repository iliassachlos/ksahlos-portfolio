import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface HeaderState {
    isHamburgerIconOpen: boolean;
    isMenuOpen: boolean;
}

const initialState: HeaderState = {
    isHamburgerIconOpen: false,
    isMenuOpen: false,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setIsHamburgerIconOpen: (state, action: PayloadAction<boolean>) => {
            state.isHamburgerIconOpen = action.payload;
        },
        setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
            state.isMenuOpen = action.payload;
        },
    },
});

export const { setIsHamburgerIconOpen, setIsMenuOpen } = headerSlice.actions;
export default headerSlice.reducer;
