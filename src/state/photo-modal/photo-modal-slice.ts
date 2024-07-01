import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPhoto } from '../../interfaces/global.interface';

export interface PhotoModalState {
    isOpen: boolean;
    selectedItem: IPhoto | undefined;
}

const initialState: PhotoModalState = {
    isOpen: false,
    selectedItem: undefined,
};

export const photoModalSlice = createSlice({
    name: 'photoModal',
    initialState,
    reducers: {
        setIsPhotoModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        setPhotoModalSelectedItem: (state, action: PayloadAction<IPhoto | undefined>) => {
            state.selectedItem = action.payload;
        },
    },
});

export const { setIsPhotoModalOpen, setPhotoModalSelectedItem } = photoModalSlice.actions;
export default photoModalSlice.reducer;
