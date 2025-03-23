import { Container, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';

function ContactSection() {
    return (
        <Element name='about'>
            <Container maxWidth='md'>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent='center'
                    mt={{ xs: 2, lg: 2, xl: 10 }}
                    mb={{ xs: 8, xl: 10 }}
                    gap={{ xs: 4 }}
                >
                    <Stack flexDirection='column' justifyContent='center' alignItems='center'>
                        <Typography fontWeight={500} textAlign={{ xs: 'left', md: 'right' }} fontSize={18} mb={1}>
                            Konstantinos Sahlos
                        </Typography>
                        <Typography fontSize={14}>k.sahlos@gmail.com </Typography>
                        <Typography fontSize={14}>Eresos Lesvos, Greece</Typography>
                        <Typography fontSize={14}>+30 693 700 0041</Typography>
                    </Stack>
                </Stack>
            </Container>
        </Element>
    );
}

export default ContactSection;
