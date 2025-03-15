import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AchivementModalState {
    isOpen: boolean;
    selectedItem: string | undefined;
}

const initialState: AchivementModalState = {
    isOpen: false,
    selectedItem: undefined,
};

export const achivementModalSlice = createSlice({
    name: 'achivementModal',
    initialState,
    reducers: {
        setIsAchievementModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        setAchievementModalSelectedItem: (state, action: PayloadAction<string | undefined>) => {
            state.selectedItem = action.payload;
        },
    },
});

export const { setIsAchievementModalOpen, setAchievementModalSelectedItem } = achivementModalSlice.actions;
export default achivementModalSlice.reducer;
