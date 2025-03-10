import { Box, Container, Stack } from '@mui/material';
import { Element } from 'react-scroll';
import CategoriesGrid from '../../components/shared/categories-grid';
import { collectionsCategories } from '../../data/collections-categories';
import SectionTitle from '../../components/shared/section-title';

function CollectionsSection() {
    return (
        <Element name='collections'>
            <Container maxWidth='xl'>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    mt={{ lg: 2, xl: 3 }}
                    mb={{ lg: 3, xl: 5 }}
                >
                    <Stack direction='column' justifyContent='center' alignItems='center' gap={2}>
                        <SectionTitle title='Print Collections' />
                        <CategoriesGrid categories={collectionsCategories} />
                    </Stack>
                </Box>
            </Container>
        </Element>
    );
}

export default CollectionsSection;
