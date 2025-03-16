import { Box, Stack, Typography } from '@mui/material';
import { Masonry } from '@mui/lab';
import { ICollectionsCategories } from '../../interfaces/global.interface';
import { useNavigate } from 'react-router-dom';

interface ICategoriesGridProps {
    categories: ICollectionsCategories[];
}

function CategoriesGrid({ categories }: ICategoriesGridProps) {
    const navigate = useNavigate();

    return (
        <Masonry columns={{ xs: 2, md: 3 }} spacing={1}>
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
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 20%, rgba(0,0,0,0) 120%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background 300ms ease-in, opacity 0.3s',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            '&:hover': {
                                background: 'transparent',
                            },
                        }}
                    >
                        <Box position='absolute' bottom={20}>
                            <Typography align='center' color='secondary' fontSize={{ xs: 16, md: 20 }}>
                                {category.title.toUpperCase()}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Masonry>
    );
}

export default CategoriesGrid;
