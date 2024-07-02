import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAdminState {
    selectedCategory: 'home' | 'add' | 'edit';
}

const initialState: IAdminState = {
    selectedCategory: 'home',
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setSelectedCategory: (state, action: PayloadAction<'home' | 'add' | 'edit'>) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setSelectedCategory } = adminSlice.actions;
export default adminSlice.reducer;
