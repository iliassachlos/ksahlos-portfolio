import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPhoto } from '../../interfaces/global.interface';

export interface IPhotoState {
    addPhotoModalOpen: boolean;
    editPhotoModalOpen: boolean;
    deletePhotoModalOpen: boolean;
    visibilityModalOpen: boolean;
    selectedPhoto: IPhoto | null;
    selectedPhotoCategory: string | null;

    //Photos sort
    sortedPhotos: IPhoto[] | undefined;
    isSortEditEnabled: boolean;
}

const initialState: IPhotoState = {
    addPhotoModalOpen: false,
    editPhotoModalOpen: false,
    deletePhotoModalOpen: false,
    visibilityModalOpen: false,
    selectedPhoto: null,
    selectedPhotoCategory: null,
    sortedPhotos: undefined,
    isSortEditEnabled: false,
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
        setVisibilityPhotoModalOpen: (state, action: PayloadAction<boolean>) => {
            state.visibilityModalOpen = action.payload;
        },
        setSelectedPhoto: (state, action: PayloadAction<IPhoto | null>) => {
            state.selectedPhoto = action.payload;
        },
        setSelectedPhotoCategory: (state, action: PayloadAction<string | null>) => {
            state.selectedPhotoCategory = action.payload;
        },
        setSortedPhotos: (state, action: PayloadAction<IPhoto[] | undefined>) => {
            state.sortedPhotos = action.payload;
        },
        setIsSortEditEnabled: (state, action: PayloadAction<boolean>) => {
            state.isSortEditEnabled = action.payload;
        },
    },
});

export const {
    setAddPhotoModalOpen,
    setEditPhotoModalOpen,
    setDeletePhotoModalOpen,
    setVisibilityPhotoModalOpen,
    setSelectedPhoto,
    setSelectedPhotoCategory,
    setSortedPhotos,
    setIsSortEditEnabled
} = photoSlice.actions;
export default photoSlice.reducer;
