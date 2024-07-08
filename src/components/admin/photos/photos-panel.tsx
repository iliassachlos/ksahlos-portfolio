import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { IPhoto } from '../../../interfaces/global.interface';
import { useFirebase } from '../../../hooks/use-firebase';
import PhotosTable from './photos-table';

function PhotosPanel() {
    const [selectedCategory, setSelectedCategory] = useState<string>('escape');

    const [escapePhotos, setEscapePhotos] = useState<IPhoto[]>([]);
    const [etherialPhotos, setEtherialPhotos] = useState<IPhoto[]>([]);
    const [illusionPhotos, setIllusionPhotos] = useState<IPhoto[]>([]);
    const [localArtPhotos, setLocalArtPhotos] = useState<IPhoto[]>([]);

    const { fetchFineArtPhotos, fetchLocalArtPhotos } = useFirebase();

    useEffect(() => {
        async function fetchAllPhotos() {
            const escapePhotos = await fetchFineArtPhotos('fine-art', 'escape');
            const etherialPhotos = await fetchFineArtPhotos('fine-art', 'etherial');
            const illusionPhotos = await fetchFineArtPhotos('fine-art', 'illusion');
            const localArtPhotos = await fetchLocalArtPhotos();

            setEscapePhotos(escapePhotos);
            setEtherialPhotos(etherialPhotos);
            setIllusionPhotos(illusionPhotos);
            setLocalArtPhotos(localArtPhotos);
        }

        fetchAllPhotos();
    }, []);

    //
    function choosePhotoCategory(): IPhoto[] {
        switch (selectedCategory) {
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

    return (
        <Box sx={{ bgcolor: 'white', p: 2, borderRadius: 4, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
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
                        <MenuItem value='etherial'>Etherial</MenuItem>
                        <MenuItem value='illusion'>Illusion</MenuItem>
                        <MenuItem value='local-art'>Local Art</MenuItem>
                    </Select>
                </Box>
                <Box>
                    <Button variant='contained' color='primary' size="large">
                        Add Photo
                    </Button>
                </Box>
            </Box>
            {/* Photos Table */}
            <Box>
                <PhotosTable photos={choosePhotoCategory()} />
            </Box>
        </Box>
    );
}

export default PhotosPanel;
