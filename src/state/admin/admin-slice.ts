import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAdminState {
    selectedCategory: 'photos' | 'exhibits';
}

const initialState: IAdminState = {
    selectedCategory: 'photos',
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setSelectedCategory: (state, action: PayloadAction< 'photos' | 'exhibits'>) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setSelectedCategory } = adminSlice.actions;
export default adminSlice.reducer;
