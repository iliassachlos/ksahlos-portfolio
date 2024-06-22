import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
            <Container>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Stack
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        textAlign='center'
                        spacing={2}
                    >
                        <Typography variant='h5'>
                            Page not found! Please click the button to redirect to home
                        </Typography>
                        <Link to='/'>
                            <Button variant='contained' color='primary'>
                                Redirect to Homepage
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export default NotFoundPage;
