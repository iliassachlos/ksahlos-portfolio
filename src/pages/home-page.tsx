import { Stack } from '@mui/material';
import HomeSection from './sections/home-section';
import CollectionsSection from './sections/collections-section';
import ExhibitionsSection from './sections/exhibitions-section';
import AboutSection from './sections/about-section';
import AchievementsSection from './sections/achievements-section';

function HomePage() {
    return (
        <Stack direction='column' gap={1}>
            <HomeSection />
            <CollectionsSection />
            <ExhibitionsSection />
            <AboutSection />
            <AchievementsSection />
        </Stack>
    );
}

export default HomePage;
