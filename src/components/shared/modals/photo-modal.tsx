import { Box, Modal, Typography, useMediaQuery, useTheme, IconButton, Stack } from '@mui/material';
import { Close, Info } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../../state/store';
import { IPhoto } from '../../../interfaces/global.interface';
import { setIsPhotoModalOpen, setPhotoModalSelectedItem } from '../../../state/photo-modal/photo-modal-slice';

const style = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: '#F2F2F2',
    boxShadow: 24,
    outline: 'none',
    borderRadius: '4px',
};

function PhotoModal() {
    const [objectFit, setObjectFit] = useState<'cover' | 'contain'>('cover');
    const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

    const dispatch = useDispatch();
    const isPhotoModalOpen: boolean = useSelector((state: RootState) => state.photoModal.isOpen);
    const selectedItem: IPhoto | undefined = useSelector((state: RootState) => state.photoModal.selectedItem);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    function closeModalHandler() {
        dispatch(setIsPhotoModalOpen(false));
        dispatch(setPhotoModalSelectedItem(undefined));
        setIsDescriptionOpen(false);
    }

    function descriptionOpenHandler() {
        setIsDescriptionOpen(!isDescriptionOpen);
    }

    function handleImageLoad(event: React.SyntheticEvent<HTMLImageElement>) {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        setObjectFit(naturalWidth > naturalHeight ? (isSmallScreen ? 'contain' : 'cover') : 'contain');
    }

    return (
        <>
            {/* <AnimatePresence> */}
            <Modal
                open={isPhotoModalOpen}
                onClose={closeModalHandler}
                aria-labelledby='photo-modal'
                aria-describedby='photo-modal'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'auto',
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                }}
            >
                <Box
                    position='relative'
                    sx={{ ...style, maxWidth: '90vw', maxHeight: '90vh' }}
                    data-testid='photo-modal'
                >
                    {selectedItem && (
                        <>
                            <Box
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center'
                                height='calc(100% - 40px)'
                                position='relative'
                            >
                                {isDescriptionOpen && (
                                    <Box
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                            zIndex: 1,
                                            backdropFilter: 'blur(12px)',
                                        }}
                                    >
                                        <Typography textAlign='center' fontSize={16} color='black' maxWidth='80%'>
                                            {selectedItem.desc ? selectedItem.desc : 'No description available'}
                                        </Typography>
                                    </Box>
                                )}
                                <img
                                    src={selectedItem.url}
                                    alt={selectedItem.title}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: 'calc(90vh - 40px)',
                                        objectFit: objectFit,
                                        zIndex: 0,
                                    }}
                                    onLoad={handleImageLoad}
                                />
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>
            {/* </AnimatePresence> */}

            {/* Buttons outside the modal, fixed at the bottom center */}
            {isPhotoModalOpen && (
                <Stack
                    position='fixed'
                    bottom={{ xs: 5, lg: 5, xl: 20 }}
                    left='50%'
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    gap={2} // Slightly reduced spacing between buttons
                    sx={{
                        transform: 'translateX(-50%)',
                        zIndex: 1500, // Ensures buttons remain visible above the modal
                    }}
                >
                    <IconButton
                        onClick={closeModalHandler}
                        sx={{
                            bgcolor: 'white',
                            boxShadow: 1,
                            borderRadius: '50%',
                            width: 40, // Reduced size
                            height: 40, // Reduced size
                            '&:hover': { bgcolor: '#f0f0f0' },
                        }}
                    >
                        <Close fontSize='small' />
                    </IconButton>
                    <IconButton
                        onClick={descriptionOpenHandler}
                        sx={{
                            bgcolor: 'white',
                            boxShadow: 1,
                            borderRadius: '50%',
                            width: 40, // Reduced size
                            height: 40, // Reduced size
                            '&:hover': { bgcolor: '#f0f0f0' },
                        }}
                    >
                        <Info fontSize='small' />
                    </IconButton>
                </Stack>
            )}
        </>
    );
}

export default PhotoModal;
