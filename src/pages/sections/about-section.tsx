import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import ProfileImage from '../../components/contact/profile-image';
import SectionTitle from '../../components/shared/section-title';

function AboutSection() {
    return (
        <Element name='about'>
            <Container maxWidth='xl'>
                <Box pt={{ lg: 3, xl: 5 }}>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems='center'
                        justifyContent='center'
                        width='100%'
                        gap={2}
                        mb={4}
                    >
                        <Box width={{ lg: '60%', xl: '50%' }}>
                            <ProfileImage />
                        </Box>
                        <Box width='100%' px={2}>
                            <Stack gap={4}>
                                <Box>
                                    <SectionTitle title='My Journey' />
                                    <Divider flexItem sx={{ my: 1 }} />
                                    <Typography align='justify' my={1}>
                                        My name is Konstantinos Sahlos born in Skala Eresos Lesvos island Greece. The
                                        interest for photography, seascape and nature photography to be exact, started
                                        in 1977 and it was then when I got my first 'professional' camera, a Russian
                                        ZENIT. Later and while in College in Crete studying Business Administration, my
                                        passion led me to acquire the all new back then Canon A1, a more sophisticated
                                        camera at the time. In 1982 I found myself in the USA studying Information
                                        Systems, and at the same time taking part-time courses on darkroom and Film
                                        Development. A few years later after all my equipment was stolen, my hobby went
                                        on a pause. In the year 2001 my interest in photography as a non-professional at
                                        the time had started growing again along the digital era , using several camera
                                        brands as Olympus, Nikon and Sony today.
                                    </Typography>
                                    <Typography align='justify' my={1}>
                                        The past years, I have been greatly influenced by minimalism, abstract and
                                        impressionism visual art styles. Nowadays, I mostly do not shoot what I see but
                                        instead what I would like to see. Nevertheless, my camera is not being used to
                                        just take photos, but used as a tool to create Fine Art. Printing is performed
                                        by me using pigment ink printers on 100% cotton museum quality paper for a
                                        highest age resistance (archival). All prints are supplied along a Certificate
                                        of Authenticity, and shipped in most places of the world in paper tubes. Having
                                        recently returned to live on Lesvos island, I am honored to have my work
                                        displayed in MYTHOS Gallery (a hometown Gallery) as well as several other
                                        Galleries occasionally , while planning private exhibitions in different cities
                                        to showcase my work.
                                    </Typography>
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
