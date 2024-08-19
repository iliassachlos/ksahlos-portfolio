import { Box, Container, Grid } from '@mui/material';
import ProfileImage from '../components/contact/profile-image';
import ContactCard from '../components/contact/contact-card';

function ContactPage() {
    return (
        <Container maxWidth='xl'>
            <Box display='flex' justifyContent='center' alignItems='center' height='90vh'>
                <Grid container height='100%' p={1}>
                    <Grid
                        item
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        xs={12}
                        md={6}
                        textAlign='center'
                        data-aos='zoom-in-up'
                        data-aos-duration='800'
                        data-aos-once='true'
                    >
                        <ProfileImage />
                    </Grid>
                    <Grid
                        item
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        xs={12}
                        md={6}
                        textAlign='center'
                        data-aos='zoom-in-up'
                        data-aos-delay='200'
                        data-aos-duration='800'
                        data-aos-once='true'
                    >
                        <Box mb={{ md: 15, xl: 25 }}>
                            <ContactCard />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default ContactPage;
