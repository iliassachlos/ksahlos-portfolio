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
    Box,
    Tooltip,
    Chip,
} from "@mui/material";
import { IPhoto } from "../../../interfaces/global.interface";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HideImageIcon from "@mui/icons-material/HideImage";
import { green, orange, red } from "@mui/material/colors";
import InfoAlert from "../../shared/alerts/info-alert";
import { useDispatch } from "react-redux";
import {
    setDeletePhotoModalOpen,
    setEditPhotoModalOpen,
    setSelectedPhoto,
    setVisibilityPhotoModalOpen,
} from "../../../state/admin/photo-slice";

interface IPhotoTableProps {
    photos: IPhoto[];
}

function PhotosTable({ photos }: IPhotoTableProps) {
    const dispatch = useDispatch();

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

    if (photos.length === 0) {
        return (
            <Box>
                <InfoAlert text="No photos were found!" />
            </Box>
        );
    }

    function hiddenPhotoShowcase(visibility: boolean) {
        if (visibility) {
            return <Chip label="Visible" color="success"></Chip>;
        } else {
            return <Chip label="Hidden" color="error"></Chip>;
        }
    }

    return (
        <TableContainer component={Paper} sx={{ maxHeight: { xl: 720 } }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Number</TableCell>
                        <TableCell align="center">Hidden</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {photos.map((photo) => (
                        <TableRow key={photo.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell align="center">
                                <img src={photo.url} alt={photo.title} width={100} />
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                                {photo.title}
                            </TableCell>
                            <TableCell align="center">{photo.number}</TableCell>
                            <TableCell align="center">{hiddenPhotoShowcase(photo.visibility)}</TableCell>
                            <TableCell align="center">
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    border="1px solid black"
                                    borderRadius={4}
                                    spacing={2}
                                    py={1}
                                >
                                    <Tooltip title="Edit">
                                        <IconButton
                                            color="primary"
                                            sx={{ "&:hover": { color: green[500] } }}
                                            onClick={() => editPhotoHandler(photo)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton
                                            color="primary"
                                            sx={{ "&:hover": { color: red[500] } }}
                                            onClick={() => deletePhotoHandler(photo)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Hide">
                                        <IconButton
                                            color="primary"
                                            sx={{ "&:hover": { color: orange[500] } }}
                                            onClick={() => visibilityPhotoHandler(photo)}
                                        >
                                            <HideImageIcon />
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

export default PhotosTable;
