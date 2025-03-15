import { Box, Modal, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../../state/store';
import { AnimatePresence } from 'framer-motion';
import {
    setAchievementModalSelectedItem,
    setIsAchievementModalOpen,
} from '../../../state/achievement-modal/achievement-modal-slice';

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

function AchievementModal() {
    const [objectFit, setObjectFit] = useState<'cover' | 'contain'>('cover');

    const dispatch = useDispatch();
    const isAchievementModalOpen: boolean = useSelector((state: RootState) => state.achievementModal.isOpen);
    const selectedItem: string | undefined = useSelector((state: RootState) => state.achievementModal.selectedItem);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    function closeModalHandler() {
        dispatch(setIsAchievementModalOpen(false));
        dispatch(setAchievementModalSelectedItem(undefined));
    }

    function handleImageLoad(event: React.SyntheticEvent<HTMLImageElement>) {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        setObjectFit(naturalWidth > naturalHeight ? (isSmallScreen ? 'contain' : 'cover') : 'contain');
    }

    return (
        <>
            <AnimatePresence>
                <Modal
                    open={isAchievementModalOpen}
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
                                    <img
                                        src={selectedItem}
                                        alt='broken-achievement'
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
            </AnimatePresence>

            {/* Buttons outside the modal, fixed at the bottom center */}
            {isAchievementModalOpen && (
                <Box
                    position='fixed'
                    bottom={{ xs: 5, lg: 5, xl: 20 }}
                    left='50%'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    gap={1.5} // Slightly reduced spacing between buttons
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
                </Box>
            )}
        </>
    );
}

export default AchievementModal;
