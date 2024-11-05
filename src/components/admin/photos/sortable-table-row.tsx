// SortableTableRow.tsx

import { TableRow, TableCell, IconButton, Stack, Tooltip, Chip } from '@mui/material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HideImageIcon from '@mui/icons-material/HideImage';
import { IPhoto } from '../../../interfaces/global.interface';
import { green, orange, red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import {
    setDeletePhotoModalOpen,
    setEditPhotoModalOpen,
    setSelectedPhoto,
    setVisibilityPhotoModalOpen,
} from '../../../state/admin/photo-slice';

interface SortableTableRowProps {
    photo: IPhoto;
    isEditMode: boolean;
}

function SortableTableRow({ photo, isEditMode }: SortableTableRowProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: photo.id });
    const dispatch = useDispatch();
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    function editPhotoHandler(photo: IPhoto) {
        dispatch(setEditPhotoModalOpen(true));
        dispatch(setSelectedPhoto(photo));
    }

    function deletePhotoHandler(photo: IPhoto) {
        dispatch(setDeletePhotoModalOpen(true));
        dispatch(setSelectedPhoto(photo));
    }

    function visibilityPhotoHandler(photo: IPhoto) {
        dispatch(setVisibilityPhotoModalOpen(true));
        dispatch(setSelectedPhoto(photo));
    }

    return (
        <TableRow
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
        >
            <TableCell align='center'>
                <img src={photo.url} alt={photo.title} width={100} />
            </TableCell>
            <TableCell align='center'>{photo.title}</TableCell>
            <TableCell align='center'>{photo.number}</TableCell>
            <TableCell align='center'>
                {photo.visibility ? <Chip label='Visible' color='success' /> : <Chip label='Hidden' color='error' />}
            </TableCell>
            <TableCell align='center'>
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                    <Tooltip title='Edit'>
                        <IconButton color='primary' onClick={() => editPhotoHandler(photo)}>
                            <EditIcon sx={{ '&:hover': { color: green[500] } }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete'>
                        <IconButton color='primary' onClick={() => deletePhotoHandler(photo)}>
                            <DeleteIcon sx={{ '&:hover': { color: red[500] } }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Hide'>
                        <IconButton color='primary' onClick={() => visibilityPhotoHandler(photo)}>
                            <HideImageIcon sx={{ '&:hover': { color: orange[500] } }} />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </TableCell>
        </TableRow>
    );
}

export default SortableTableRow;
