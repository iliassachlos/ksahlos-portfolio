import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { Element, Link } from 'react-scroll';
import ProfileImage from '../../components/contact/profile-image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function AboutSection() {
    return (
        <Element name='about'>
            <Container maxWidth='xl'>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    pt={{ lg: 3, xl: 5 }}
                    pb={{ lg: 1, xl: 2 }}
                >
                    <Stack direction={{ xs: 'column', md: 'row' }} gap={2} width='100%'>
                        <Box width={{ lg: '60%', xl: '50%' }}>
                            <ProfileImage />
                        </Box>
                        <Box width='100%' px={2}>
                            <Stack gap={4}>
                                <Box>
                                    <Typography align='left' variant='h2' fontWeight={500} fontSize={30}>
                                        About
                                    </Typography>
                                    <Divider flexItem />
                                    <Typography align='justify' my={1}>
                                        I do not capture what I see, but instead what I would like to see
                                    </Typography>
                                </Box>
                                <Box>
                                    <Stack direction='column'>
                                        <Typography align='left' variant='h2' fontWeight={500} fontSize={30}>
                                            The artwork
                                        </Typography>
                                        <Divider flexItem />
                                        <Stack gap={1}>
                                            <Typography align='justify' mt={1}>
                                                - The final prints are produced in-house using pigment ink Canon and
                                                Epson photo printers
                                            </Typography>
                                            <Typography align='justify'>
                                                - The printed material used is 100% cotton museum quality canvas and
                                                paper
                                            </Typography>
                                            <Typography align='justify'>- Available sizes are A4 to A0</Typography>
                                            <Typography align='justify'>
                                                - All artwork comes with Certificate of Authenticity
                                            </Typography>
                                            <Typography align='justify'>
                                                - All artwork is signed by the artist and shipped in paper tube
                                            </Typography>
                                        </Stack>
                                        {/* <Typography align='justify' my={1}>
                                            Now, as you were able to get a picture of who I am, how I work and what I
                                            can do, it is up to you to contact me and lay the foundation for a new and
                                            successful relationship.
                                        </Typography> */}
                                    </Stack>
                                </Box>
                                <Box textAlign='left'>
                                    <Typography fontWeight={500} fontSize={20} mb={1}>
                                        Konstantinos Sahlos
                                    </Typography>
                                    <Grid container spacing={{ xs: 2, md: 1 }}>
                                        <Grid item xs={6}>
                                            <Typography>k.sahlos@gmail.com</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>Eresos</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>+30 (0) 693 700 0041</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>Lesvos, Greece</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box textAlign='left' mt={{ xs: 4, md: 0 }} mb={{ xs: 8, md: 0 }}>
                                    <Typography align='left' variant='h5' fontWeight={500} fontSize={30}>
                                        Or Find Me On Social Media
                                    </Typography>
                                    <Divider flexItem />
                                    <Stack direction='column' my={2} spacing={2}>
                                        <Link
                                            to='https://www.facebook.com/konstantinos.sahlos'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{
                                                color: 'inherit',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <Typography display='flex' alignItems='center' gap={1}>
                                                <FacebookIcon />
                                                Konstantinos Sahlos
                                            </Typography>
                                        </Link>
                                        <Link
                                            to='https://www.instagram.com/ksahlos_photo/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                        >
                                            <Typography display='flex' alignItems='center' gap={1}>
                                                <InstagramIcon />
                                                Ksahlos_Photo
                                            </Typography>
                                        </Link>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Element>
    );
}

export default AboutSection;
