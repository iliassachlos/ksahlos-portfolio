import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IExhibits } from '../../interfaces/global.interface';

export interface IExhibitState {
    addExhibitModalOpen: boolean;
    editExhibitModalOpen: boolean;
    deletedExhibitModalOpen: boolean;
    selectedExhibit: IExhibits | null;
}

const initialState: IExhibitState = {
    addExhibitModalOpen: false,
    editExhibitModalOpen: false,
    deletedExhibitModalOpen: false,
    selectedExhibit: null,
};

export const exhibitSlice = createSlice({
    name: 'exhibitSlice',
    initialState,
    reducers: {
        setAddExhibitModalOpen: (state, action: PayloadAction<boolean>) => {
            state.addExhibitModalOpen = action.payload;
        },
        setEditExhibitModalOpen: (state, action: PayloadAction<boolean>) => {
            state.editExhibitModalOpen = action.payload;
        },
        setDeleteExhibitModalOpen: (state, action: PayloadAction<boolean>) => {
            state.deletedExhibitModalOpen = action.payload;
        },
        setSelectedExhibit: (state, action: PayloadAction<IExhibits | null>) => {
            state.selectedExhibit = action.payload;
        },
    },
});

export const { setAddExhibitModalOpen, setEditExhibitModalOpen, setDeleteExhibitModalOpen, setSelectedExhibit } =
    exhibitSlice.actions;
export default exhibitSlice.reducer;
