// /src/components/shared/modals/photo-modal.tsx
import { Box, IconButton, Modal, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../../state/store';
import { IPhoto } from '../../../interfaces/global.interface';
import { setIsPhotoModalOpen, setPhotoModalSelectedItem } from '../../../state/photo-modal/photo-modal-slice';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    width: '90%',
    bgcolor: '#F2F2F2',
    boxShadow: 24,
    outline: 'none',
    borderRadius: '4px',
};

function PhotoModal() {
    const [objectFit, setObjectFit] = useState<'cover' | 'contain'>('cover');

    const user: boolean = false;
    const dispatch = useDispatch();
    const isPhotoModalOpen: boolean = useSelector((state: RootState) => state.photoModal.isOpen);
    const selectedItem: IPhoto | undefined = useSelector((state: RootState) => state.photoModal.selectedItem);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    // Handles closing the modal and resetting selected item
    function closeModalHandler() {
        dispatch(setIsPhotoModalOpen(false));
        dispatch(setPhotoModalSelectedItem(undefined));
    }

    // Adjusts image object-fit based on natural dimensions
    function handleImageLoad(event: React.SyntheticEvent<HTMLImageElement>) {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        if (naturalWidth > naturalHeight) {
            setObjectFit(isSmallScreen ? 'contain' : 'cover');
        } else {
            setObjectFit('contain');
        }
    }

    return (
        <Modal
            open={isPhotoModalOpen}
            onClose={closeModalHandler}
            aria-labelledby='photo-modal'
            aria-describedby='photo-modal'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box position='relative' sx={style} data-testid='photo-modal'>
                <Box position='absolute' top={0} right={0}>
                    {/* Close button for modal */}
                    <IconButton onClick={closeModalHandler} color='primary' disableRipple>
                        <CloseIcon sx={{ backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '4px', p: '1px' }} />
                    </IconButton>
                </Box>
                {selectedItem && (
                    <>
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            height='calc(100% - 40px)'
                            width='100%'
                        >
                            {/* Displaying selected image */}
                            <img
                                src={selectedItem.url}
                                alt={selectedItem.title}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    objectFit: objectFit,
                                    borderRadius: '4px 4px 0px 0px',
                                }}
                                onLoad={handleImageLoad}
                            />
                        </Box>
                        {/* Displaying image title and image number */}
                        <Box width='100%' bgcolor='white' py={1} gap={2} borderRadius='4px'>
                            <Stack display='flex' justifyContent='center' alignItems='center' direction='row'>
                                <Typography>{selectedItem.title}</Typography>
                                {user && (
                                    <Typography mx={1} fontWeight={500}>
                                        [ {selectedItem.number} ]
                                    </Typography>
                                )}
                            </Stack>
                        </Box>
                    </>
                )}
            </Box>
        </Modal>
    );
}

export default PhotoModal;
