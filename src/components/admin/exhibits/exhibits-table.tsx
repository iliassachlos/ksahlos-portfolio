import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Box,
    IconButton,
    Stack,
    Tooltip,
} from '@mui/material';
import { IExhibits } from '../../../interfaces/global.interface';
import InfoAlert from '../../shared/alerts/info-alert';
import { red, green } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import {
    setDeleteExhibitModalOpen,
    setEditExhibitModalOpen,
    setSelectedExhibit,
} from '../../../state/admin/exhibit-slice';

interface IExhibitsTableProps {
    exhibits: IExhibits[];
}

function ExhibitsTable({ exhibits }: IExhibitsTableProps) {
    const dispatch = useDispatch();

    function editExhibitClickHandler(exhibit: IExhibits) {
        dispatch(setEditExhibitModalOpen(true));
        dispatch(setSelectedExhibit(exhibit));
    }

    function deleteExhibitClickHandler(exhibit: IExhibits) {
        dispatch(setDeleteExhibitModalOpen(true));
        dispatch(setSelectedExhibit(exhibit));
    }

    if (exhibits.length === 0) {
        return (
            <Box>
                <InfoAlert text='No exhibits were found!' />
            </Box>
        );
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='exhibits table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Coordinates</TableCell>
                        <TableCell align='center'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exhibits.map((exhibit) => (
                        <TableRow key={exhibit.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align='center'>{exhibit.name}</TableCell>
                            <TableCell align='center'>{exhibit.coordinates}</TableCell>
                            <TableCell align='center'>
                                <Stack
                                    direction='row'
                                    justifyContent='center'
                                    alignItems='center'
                                    border='1px solid black'
                                    borderRadius={4}
                                    spacing={2}
                                    py={1}
                                >
                                    <Tooltip title='Edit'>
                                        <IconButton
                                            color='primary'
                                            sx={{ '&:hover': { color: green[500] } }}
                                            onClick={() => editExhibitClickHandler(exhibit)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Delete'>
                                        <IconButton
                                            color='primary'
                                            sx={{ '&:hover': { color: red[500] } }}
                                            onClick={() => deleteExhibitClickHandler(exhibit)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ExhibitsTable;
