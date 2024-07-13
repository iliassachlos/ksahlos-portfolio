import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { IPhoto } from '../../../interfaces/global.interface';
import { useFirebase } from '../../../hooks/use-firebase';
import PhotosTable from './photos-table';
import Spinner from '../../shared/spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAddPhotoModalOpen,
    setSelectedPhotoCategory,
} from '../../../state/admin/photo-slice';
import { RootState } from '../../../state/store';
import AddPhotoModal from './add-photo-modal';
import EditPhotoModal from './edit-photo-modal';

function PhotosPanel() {
    const [selectedCategory, setSelectedCategory] = useState<string>('escape');
    const [loading, setLoading] = useState<boolean>(true);

    // Photos
    const [escapePhotos, setEscapePhotos] = useState<IPhoto[]>([]);
    const [essentialPhotos, setEssentialPhotos] = useState<IPhoto[]>([]);
    const [etherialPhotos, setEtherialPhotos] = useState<IPhoto[]>([]);
    const [illusionPhotos, setIllusionPhotos] = useState<IPhoto[]>([]);
    const [localArtPhotos, setLocalArtPhotos] = useState<IPhoto[]>([]);

    // Action Modals
    const addPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.addPhotoModalOpen);
    const editPhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.editPhotoModalOpen);
    const deletePhotoModalOpen: boolean = useSelector((state: RootState) => state.photo.deletePhotoModalOpen);

    const { fetchPhotos } = useFirebase();
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchAllPhotos() {
            const escapePhotos = await fetchPhotos('escape');
            const essentialPhotos = await fetchPhotos('escape');
            const etherialPhotos = await fetchPhotos('etherial');
            const illusionPhotos = await fetchPhotos('illusion');
            const localArtPhotos = await fetchPhotos('local-art');

            setEscapePhotos(escapePhotos);
            setEssentialPhotos(essentialPhotos);
            setEtherialPhotos(etherialPhotos);
            setIllusionPhotos(illusionPhotos);
            setLocalArtPhotos(localArtPhotos);

            setLoading(false);
        }

        fetchAllPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addPhotoModalOpen, editPhotoModalOpen, deletePhotoModalOpen]);

    //
    function choosePhotoCategory(): IPhoto[] {
        switch (selectedCategory) {
            case 'essential':
                return essentialPhotos;
            case 'escape':
                return escapePhotos;
            case 'etherial':
                return etherialPhotos;
            case 'illusion':
                return illusionPhotos;
            case 'local-art':
                return localArtPhotos;
            default:
                return [];
        }
    }

    function addPhotoClickHandler() {
        dispatch(setAddPhotoModalOpen(true));
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
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        sx={{ width: 250 }}
                    >
                        <MenuItem value='escape'>Escape</MenuItem>
                        <MenuItem value='essential'>Essential</MenuItem>
                        <MenuItem value='etherial'>Etherial</MenuItem>
                        <MenuItem value='illusion'>Illusion</MenuItem>
                        <MenuItem value='local-art'>Local Art</MenuItem>
                    </Select>
                </Box>
                <Box>
                    <Button variant='contained' color='primary' size='large' onClick={() => addPhotoClickHandler()}>
                        Add Photo
                    </Button>
                </Box>
            </Box>
            {/* Photos Table */}
            <Box>
                {loading && (
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Spinner />
                    </Box>
                )}
                {!loading && <PhotosTable photos={choosePhotoCategory()} />}
            </Box>
            {addPhotoModalOpen && <AddPhotoModal />}
            {editPhotoModalOpen && <EditPhotoModal />}
        </Box>
    );
}

export default PhotosPanel;
