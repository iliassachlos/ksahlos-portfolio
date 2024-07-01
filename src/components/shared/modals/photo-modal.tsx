// /src/components/shared/modals/photo-modal.tsx
import { Box, IconButton, Modal } from '@mui/material';
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

    const dispatch = useDispatch();
    const isPhotoModalOpen: boolean = useSelector((state: RootState) => state.photoModal.isOpen);
    const selectedItem: IPhoto | undefined = useSelector((state: RootState) => state.photoModal.selectedItem);

    function closeModalHandler() {
        dispatch(setIsPhotoModalOpen(false));
        dispatch(setPhotoModalSelectedItem(undefined));
    }

    function handleImageLoad(event: React.SyntheticEvent<HTMLImageElement>) {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        if (naturalWidth > naturalHeight) {
            setObjectFit('cover');
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
                    <IconButton onClick={closeModalHandler}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                {selectedItem && (
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        height='100%'
                        width='100%'
                    >
                        <img
                            src={selectedItem.url}
                            alt={selectedItem.title}
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: objectFit,
                                borderRadius: '4px',
                            }}
                            onLoad={handleImageLoad}
                        />
                    </Box>
                )}
            </Box>
        </Modal>
    );
}

export default PhotoModal;
