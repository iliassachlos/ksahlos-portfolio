import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPhoto } from '../../interfaces/global.interface';

export interface IPhotoState {
    addPhotoModalOpen: boolean;
    editPhotoModalOpen: boolean;
    deletePhotoModalOpen: boolean;
    selectedPhoto: IPhoto | null;
}

const initialState: IPhotoState = {
    addPhotoModalOpen: false,
    editPhotoModalOpen: false,
    deletePhotoModalOpen: false,
    selectedPhoto: null,
};

export const photoSlice = createSlice({
    name: 'photoSlice',
    initialState,
    reducers: {
        setAddPhotoModalOpen: (state, action: PayloadAction<boolean>) => {
            state.addPhotoModalOpen = action.payload;
        },
        setEditPhotoModalOpen: (state, action: PayloadAction<boolean>) => {
            state.editPhotoModalOpen = action.payload;
        },
        setDeletePhotoModalOpen: (state, action: PayloadAction<boolean>) => {
            state.deletePhotoModalOpen = action.payload;
        },
        setSelectedPhoto: (state, action: PayloadAction<IPhoto | null>) => {
            state.selectedPhoto = action.payload;
        },
    },
});

export const { setAddPhotoModalOpen, setEditPhotoModalOpen, setDeletePhotoModalOpen, setSelectedPhoto } =
    photoSlice.actions;
export default photoSlice.reducer;
