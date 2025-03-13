import { Masonry } from '@mui/lab';
import { IPhoto } from '../../interfaces/global.interface';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import PhotoModal from './modals/photo-modal';
import { setIsPhotoModalOpen, setPhotoModalSelectedItem } from '../../state/photo-modal/photo-modal-slice';
import { RootState } from '../../state/store';

interface IMasonryGridProps {
    photos: IPhoto[];
    category: string;
}

function MasonryGrid({ photos, category }: IMasonryGridProps) {
    const isUserLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);
    const dispatch = useDispatch();

    function selectPhotoHandler(photo: IPhoto) {
        dispatch(setIsPhotoModalOpen(true));
        dispatch(setPhotoModalSelectedItem(photo));
    }

    return (
        <Masonry columns={{ xs: 2, md: 3, lg: 4, xl: 5 }} spacing={1}>
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
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            // backdropFilter: 'blur(4px)',
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
                        <Stack direction='column' gap={1} width='100%' color='white'>
                            <Typography align='center' fontSize={24}>
                                {photo.title}
                            </Typography>
                            <Box width='100%' px={2}>
                                <Divider orientation='horizontal' sx={{ bgcolor: 'white', height: '1px' }} />
                            </Box>
                            <Typography align='center' fontWeight={500} fontSize={12}>
                                {category.toUpperCase()}
                            </Typography>
                            {isUserLoggedIn && (
                                <Typography align='center' fontWeight={600}>
                                    [{photo.number}]
                                </Typography>
                            )}
                        </Stack>
                    </Box>
                </Box>
            ))}
            <PhotoModal />
        </Masonry>
    );
}

export default MasonryGrid;
