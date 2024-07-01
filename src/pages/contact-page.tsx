import { Box, Container, Grid } from '@mui/material';
import ProfileImage from '../components/contact/profile-image';
import ContactCard from '../components/contact/contact-card';

function ContactPage() {
    return (
        <Container maxWidth='xl'>
            <Box display='flex' justifyContent='center' alignItems='center' height='90vh'>
                <Grid container height='100%' p={1}>
                    <Grid
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        item
                        xs={12}
                        md={6}
                        textAlign='center'
                        my={2}
                    >
                        <ProfileImage />
                    </Grid>
                    <Grid item xs={12} md={6} textAlign='center'>
                        <ContactCard />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default ContactPage;
