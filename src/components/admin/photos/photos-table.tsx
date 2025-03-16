import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { IPhoto } from '../../../interfaces/global.interface';
import InfoAlert from '../../shared/alerts/info-alert';
import SortableTableRow from './sortable-table-row';
import { RootState } from '../../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSortedPhotos } from '../../../state/admin/photo-slice';

interface IPhotoTableProps {
    photos: IPhoto[];
}

function PhotosTable({ photos }: IPhotoTableProps) {
    const sortedPhotos: IPhoto[] | undefined = useSelector((state: RootState) => state.photo.sortedPhotos);
    const isSortEditEnabled: boolean = useSelector((state: RootState) => state.photo.isSortEditEnabled);

    const dispatch = useDispatch();

    function handleDragEnd(event: any) {
        const { active, over } = event;
        if (active.id !== over.id && sortedPhotos) {
            const oldIndex = sortedPhotos.findIndex((photo) => photo.id === active.id);
            const newIndex = sortedPhotos.findIndex((photo) => photo.id === over.id);
            const newOrder = arrayMove(sortedPhotos, oldIndex, newIndex);

            dispatch(setSortedPhotos(newOrder));
        }
    }

    if (!sortedPhotos) {
        return <InfoAlert text='No sortedPhotos found!' />;
    }

    return (
        <Box height='100%'>
            {sortedPhotos.length === 0 ? (
                <InfoAlert text='No photos were found!' />
            ) : (
                <TableContainer component={Paper} sx={{ height: '100%' }}>
                    {isSortEditEnabled ? (
                        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                            <SortableContext
                                items={sortedPhotos.map((photo) => photo.id)}
                                strategy={verticalListSortingStrategy}
                            >
                                <Table sx={{ minWidth: 650 }} aria-label='sortable table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'>Image</TableCell>
                                            <TableCell align='center'>Title</TableCell>
                                            <TableCell align='center'>Number</TableCell>
                                            <TableCell align='center'>Hidden</TableCell>
                                            <TableCell align='center'>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {sortedPhotos.map((photo) => (
                                            <SortableTableRow
                                                key={photo.id}
                                                photo={photo}
                                                isEditMode={isSortEditEnabled}
                                            />
                                        ))}
                                    </TableBody>
                                </Table>
                            </SortableContext>
                        </DndContext>
                    ) : (
                        <Table sx={{ minWidth: 650, height: '100%' }} aria-label='sortable table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>Image</TableCell>
                                    <TableCell align='center'>Title</TableCell>
                                    <TableCell align='center'>Number</TableCell>
                                    <TableCell align='center'>Hidden</TableCell>
                                    <TableCell align='center'>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sortedPhotos.map((photo) => (
                                    <SortableTableRow key={photo.id} photo={photo} isEditMode={isSortEditEnabled} />
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </TableContainer>
            )}
        </Box>
    );
}

export default PhotosTable;
