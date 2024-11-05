import { Box, Button, MenuItem, Select, Typography, SelectChangeEvent, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { IPhoto } from '../../../interfaces/global.interface';
import { useFirebase } from '../../../hooks/use-firebase';
import PhotosTable from './photos-table';
import Spinner from '../../shared/spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAddPhotoModalOpen,
    setIsSortEditEnabled,
    setSelectedPhotoCategory,
    setSortedPhotos,
} from '../../../state/admin/photo-slice';
import { RootState } from '../../../state/store';
import AddPhotoModal from './add-photo-modal';
import EditPhotoModal from './edit-photo-modal';
import DeletePhotoModal from './delete-photo-modal';
import VisibilityPhotoModal from './visibility-photo-modal';

function PhotosPanel() {
    const [selectedCategory, setSelectedCategory] = useState<string>('escape');
    const [loading, setLoading] = useState<boolean>(true);
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    //const [isEditMode, setIsEditMode] = useState(false);

    // Action Modals
    const addPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.addPhotoModalOpen);
    const editPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.editPhotoModalOpen);
    const deletePhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.deletePhotoModalOpen);
    const visibilityPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.visibilityModalOpen);

    const selectedPhotoCategory: string | null = useSelector((state: RootState) => state.photo.selectedPhotoCategory);
    const sortedPhotos: IPhoto[] | undefined = useSelector((state: RootState) => state.photo.sortedPhotos);
    const isSortEditEnabled: boolean = useSelector((state: RootState) => state.photo.isSortEditEnabled);

    const { fetchPhotos, updatePhotoOrder } = useFirebase();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSortedPhotos(photos));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photos]);

    // Set selectedCategory redux state when component renders or category changes
    useEffect(() => {
        if (selectedCategory.length > 0) {
            dispatch(setSelectedPhotoCategory(selectedCategory));
        }
    }, [selectedCategory, dispatch]);

    // Fetch photos when component renders or category/modals change
    useEffect(() => {
        async function fetchCategoryPhotos() {
            setLoading(true);
            const categoryPhotos = await fetchPhotos(selectedCategory);
            setPhotos(categoryPhotos);
            setLoading(false);
        }

        fetchCategoryPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory]);

    function addPhotoClickHandler() {
        dispatch(setAddPhotoModalOpen(true));
    }

    function selectedCategoryHandler(e: SelectChangeEvent<string>) {
        setSelectedCategory(e.target.value);
    }

    function toggleEditMode() {
        //setIsEditMode(!isEditMode);
        dispatch(setIsSortEditEnabled(!isSortEditEnabled));
    }

    async function handleSaveOrder() {
        if (selectedPhotoCategory && sortedPhotos) {
            console.log('INSIDE HANDLE ORDERs');
            await updatePhotoOrder(selectedPhotoCategory, sortedPhotos); // Pass the category and photos list
            //setIsEditMode(false); // Exit edit mode after saving
            dispatch(setIsSortEditEnabled(false));
        }
    }

    return (
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <Box mb={4}>
                <Typography variant='h5'>Photos panel</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box mb={2}>
                    <Select
                        value={selectedCategory}
                        label='Category'
                        onChange={selectedCategoryHandler}
                        sx={{ width: 250 }}
                    >
                        <MenuItem value='escape'>Escape</MenuItem>
                        <MenuItem value='essential'>Essential</MenuItem>
                        <MenuItem value='etherial'>Etherial</MenuItem>
                        <MenuItem value='illusion'>Illusion</MenuItem>
                        <MenuItem value='local-art'>Local Art</MenuItem>
                    </Select>
                </Box>
                <Stack direction='row' gap={1}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        onClick={isSortEditEnabled ? handleSaveOrder : toggleEditMode}
                    >
                        {isSortEditEnabled ? 'Save Order' : 'Sort Photos'}
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        onClick={addPhotoClickHandler}
                        disabled={isSortEditEnabled}
                    >
                        Add Photo
                    </Button>
                </Stack>
            </Box>
            {/* Photos Table */}
            <Box>
                {loading && (
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Spinner />
                    </Box>
                )}
                {!loading && <PhotosTable photos={photos} />}
            </Box>
            {addPhotoModalOpen && <AddPhotoModal />}
            {editPhotoModalOpen && <EditPhotoModal />}
            {deletePhotoModalOpen && <DeletePhotoModal />}
            {visibilityPhotoModalOpen && <VisibilityPhotoModal />}
        </Box>
    );
}

export default PhotosPanel;
