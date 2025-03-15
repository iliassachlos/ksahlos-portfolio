import { Stack } from '@mui/material';
import HomeSection from './sections/home-section';
import CollectionsSection from './sections/collections-section';
import ExhibitionsSection from './sections/exhibitions-section';
import AboutSection from './sections/about-section';
import AchievementsSection from './sections/achievements-section';
import ContactSection from './sections/contact-section';

function HomePage() {
    return (
        <Stack direction='column' gap={1}>
            <HomeSection />
            <CollectionsSection />
            <ExhibitionsSection />
            <AboutSection />
            <AchievementsSection />
            <ContactSection />
        </Stack>
    );
}

export default HomePage;
