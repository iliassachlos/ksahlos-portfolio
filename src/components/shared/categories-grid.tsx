import { Box, Stack, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { ICollectionCategories } from "../../interfaces/global.interface";
import { useNavigate } from "react-router-dom";

interface ICategoriesGridProps {
    categories: ICollectionCategories[]
}

function CategoriesGrid({categories}: ICategoriesGridProps) {
    const navigate = useNavigate();

    return (
        <Masonry columns={{xs: 2, md: 3, lg: 4}} spacing={1}>
            {categories.map((category, index) => (
                <Box key={index} position='relative' onClick={() => navigate(category.redirectionUrl)}>
                    <img
                        src={category.imageUrl}
                        alt={category.title}
                        style={{
                            display: 'block',
                            width: '100%',
                            borderRadius: '2px',
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(4px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            '&:hover': {
                                opacity: 1,
                            },
                        }}
                    >
                        <Stack direction='column'>
                            <Typography align='center' fontWeight={500}>
                                {category.title}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            ))}
        </Masonry>
    )
}

export default CategoriesGrid;