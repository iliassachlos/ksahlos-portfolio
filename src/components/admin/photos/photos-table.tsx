import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Stack,
    IconButton,
    Icon,
    Box,
} from '@mui/material';
import { IPhoto } from '../../../interfaces/global.interface';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HideImageIcon from '@mui/icons-material/HideImage';
import { green, orange, red, yellow } from "@mui/material/colors";
import InfoAlert from "../../shared/alerts/info-alert";

interface IPhotoTableProps {
    photos: IPhoto[];
}

function PhotosTable({ photos }: IPhotoTableProps) {

    if(photos.length === 0){
        return( 
            <Box>
                <InfoAlert text="No photos were found!"/>
            </Box>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Image</TableCell>
                        <TableCell align='center'>Title</TableCell>
                        <TableCell align='center'>Description</TableCell>
                        <TableCell align='center'>Number</TableCell>
                        <TableCell align='center'>Hidden</TableCell>
                        <TableCell align='center'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {photos.map((photo) => (
                        <TableRow key={photo.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align='center'>
                                <img src={photo.url} alt={photo.title} width={80} />
                            </TableCell>
                            <TableCell align='center' component='th' scope='row'>
                                {photo.title}
                            </TableCell>
                            <TableCell align='center'>{photo.desc}</TableCell>
                            <TableCell align='center'>{photo.number}</TableCell>
                            <TableCell align='center'></TableCell>
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
                                    <IconButton color='primary' sx={{ '&:hover': { color: red[500] } }}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color='primary' sx={{ '&:hover': { color: green[500] } }}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton color='primary' sx={{ '&:hover': { color: orange[500] } }}>
                                        <HideImageIcon />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PhotosTable;
