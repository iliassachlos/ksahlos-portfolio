import { Box, Grid } from '@mui/material';
import AboutImage from '../components/about/about-image';
import AchievementsBlock from '../components/about/achievements-block';
import QuoteBlock from '../components/about/quote-block';

function AboutPage() {
    
    return (
            <Grid container display='flex' justifyContent='center' alignItems='center' height='100%' p={1}>
                <Grid item xs={12} md={12} lg={4}>
                    <Box display='flex' justifyContent='center' alignItems='center' height='100%' mb={2}>
                        <AboutImage />
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                    <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
                        <AchievementsBlock minHeight={{ xs: '70vh', md: '65vh', xl: '60vh' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                    <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
                        <QuoteBlock minHeight={{ xs: '40vh', md: '65vh', xl: '60vh' }} />
                    </Box>
                </Grid>
            </Grid>
    );
}

export default AboutPage;
