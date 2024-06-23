import { Box } from '@mui/material';

function AboutImage() {
    const aboutImage: string =
        'https://firebasestorage.googleapis.com/v0/b/ksahlos-portfolio.appspot.com/o/others%2Fabout-picture.jpg?alt=media&token=3fd1cc5f-ac80-4014-ac0f-2a3fd54eded4';

    return (
        <Box
            component='img'
            src={aboutImage}
            alt='About'
            sx={{
                mt: { md: 2 },
                mb: { xs: 4, md: 0 },
                maxHeight: { xs: '70vh', md: '65vh', xl: '60vh' },
                width: 'auto',
                height: '100%',
            }}
        />
    );
}

export default AboutImage;
