import { Box, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../../state/store';
import { IPhoto } from '../../../interfaces/global.interface';
import { setIsPhotoModalOpen, setPhotoModalSelectedItem } from '../../../state/photo-modal/photo-modal-slice';
import { AnimatePresence, motion } from 'framer-motion';

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

    const isUserLoggedIn: boolean = useSelector((state: RootState) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    const isPhotoModalOpen: boolean = useSelector((state: RootState) => state.photoModal.isOpen);
    const selectedItem: IPhoto | undefined = useSelector((state: RootState) => state.photoModal.selectedItem);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    // Handles closing the modal and resetting selected item
    function closeModalHandler() {
        dispatch(setIsPhotoModalOpen(false));
        dispatch(setPhotoModalSelectedItem(undefined));
        setIsDescriptionOpen(false);
    }

    // Handle description modal
    function descriptionOpenHandler() {
        setIsDescriptionOpen(!isDescriptionOpen);
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
        <>
            <AnimatePresence>
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
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.4, ease: 'easeInOut' }}
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
                                                {selectedItem.desc === '' || selectedItem.desc === undefined
                                                    ? 'No description was found for this photo'
                                                    : selectedItem.desc}
                                            </Typography>
                                        </motion.div>
                                    )}
                                    <img
                                        src={selectedItem.url}
                                        alt={selectedItem.title}
                                        style={{
                                            maxWidth: '100%', // Ensure the image does not exceed modal dimensions
                                            maxHeight: 'calc(90vh - 40px)', // Ensure the image does not exceed modal dimensions considering the title
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
            </AnimatePresence>
        </>
    );
}

export default PhotoModal;
