import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { Element, Link } from 'react-scroll';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactSection() {
    return (
        <Element name='about'>
            <Container maxWidth='xl'>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent='space-around'
                    mt={{ xs: 2, lg: 6, xl: 10 }}
                    mb={{ xs: 8, xl: 10 }}
                    gap={{ xs: 4 }}
                >
                    <Box textAlign='left'>
                        <Typography fontWeight={500} fontSize={24} mb={1}>
                            Konstantinos Sahlos
                        </Typography>
                        <Stack direction={{ xs: 'column', md: 'row' }} gap={1}>
                            <Typography>k.sahlos@gmail.com</Typography>
                            <Typography>Eresos</Typography>
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} gap={1}>
                            <Typography>+30 (0) 693 700 0041</Typography>
                            <Typography>Lesvos, Greece</Typography>
                        </Stack>
                    </Box>
                    <Box textAlign='left'>
                        <Typography fontWeight={500} fontSize={24} mb={1}>
                            Find me on Social Media
                        </Typography>
                        <Stack direction='column' gap={1}>
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
                    {/* <Box textAlign='left'>
                        <Typography fontWeight={500} fontSize={24} mb={1}>
                            Find me on Social Media
                        </Typography>
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
                    </Box> */}
                </Stack>
            </Container>
        </Element>
    );
}

export default ContactSection;
