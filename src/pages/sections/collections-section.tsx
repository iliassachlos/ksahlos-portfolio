import { Box, Container, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import CategoriesGrid from '../../components/shared/categories-grid';
import { collectionsCategories } from '../../data/collections-categories';

function CollectionsSection() {
    return (
        <Element name='collections'>
            <Container maxWidth='xl'>
                <Box display='flex' alignItems='center' justifyContent='center' my={{ lg: 1, xl: 2 }}>
                    <Stack direction='column' justifyContent='center' alignItems='center' gap={2}>
                        <Typography variant='h1' fontSize={28} fontWeight={600}>
                            Print Collections
                        </Typography>
                        <CategoriesGrid categories={collectionsCategories} />
                    </Stack>
                </Box>
            </Container>
        </Element>
    );
}

export default CollectionsSection;
