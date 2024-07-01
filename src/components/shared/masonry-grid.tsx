import { Masonry } from '@mui/lab';
import { IPhoto } from '../../interfaces/global.interface';
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import PhotoModal from './modals/photo-modal';
import { setIsPhotoModalOpen, setPhotoModalSelectedItem } from '../../state/photo-modal/photo-modal-slice';

interface IMasonryGridProps {
    photos: IPhoto[];
}

function MasonryGrid({ photos }: IMasonryGridProps) {
    const dispatch = useDispatch();

    function selectPhotoHandler(photo: IPhoto) {
        dispatch(setIsPhotoModalOpen(true));
        dispatch(setPhotoModalSelectedItem(photo));
    }

    return (
        <Masonry columns={{ xs: 2, md: 3 }} spacing={1}>
            {photos.map((photo) => (
                <Box key={photo.id} position='relative' onClick={() => selectPhotoHandler(photo)}>
                    <img
                        src={photo.url}
                        alt={photo.title}
                        style={{
                            display: 'block',
                            width: '100%',
                            borderRadius: '2px',
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(4px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            '&:hover': {
                                opacity: 1,
                            },
                        }}
                    >
                        <Stack direction='column'>
                            <Typography align='center' fontWeight={500}>
                                {photo.title}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            ))}
            <PhotoModal />
        </Masonry>
    );
}

export default MasonryGrid;
