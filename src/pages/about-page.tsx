import { Box, Container, Stack } from '@mui/material';

function AboutPage() {
    return (
        <Container
            sx={{
                minHeight: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid red',
            }}
        >
            <Stack direction='row' spacing={8}>
                <Box>test1</Box>
                <Box>tes2</Box>
                <Box>test3</Box>
            </Stack>
        </Container>
    );
}

export default AboutPage;
