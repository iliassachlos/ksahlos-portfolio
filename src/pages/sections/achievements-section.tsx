import { Box, Container, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Element } from 'react-scroll';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { achievements } from '../../data/achievements-data';
import { IAchievement } from '../../interfaces/global.interface';
import SectionTitle from '../../components/shared/section-title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import {
    setAchievementModalSelectedItem,
    setIsAchievementModalOpen,
} from '../../state/achievement-modal/achievement-modal-slice';
import AchievementModal from '../../components/shared/modals/achievement-modal';
import { useState } from 'react';

function AchievementsSection() {
    const isAchievementModalOpen = useSelector((state: RootState) => state.achievementModal.isOpen);
    const dispatch = useDispatch();

    // State to track the current index of the carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    // Use Material-UI's useMediaQuery to detect screen size
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg')); // 1200px and up
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900px to 1199px
    const isXs = useMediaQuery(theme.breakpoints.down('md')); // Below 900px

    // Dynamically set the number of images to show based on screen size
    const imagesToShow = isLg ? 7 : isMd ? 5 : 3;

    // Function to handle next button click
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    };

    // Function to handle previous button click
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length);
    };

    // Function to handle image click
    const handleImageClick = (imageUrl: string) => {
        dispatch(setIsAchievementModalOpen(true));
        dispatch(setAchievementModalSelectedItem(imageUrl));
    };

    return (
        <>
            <Element name='achievements'>
                <Box my={2} width='100%' bgcolor='white' pt={{ lg: 6, xl: 8 }} pb={{ lg: 8, xl: 10 }}>
                    <Container maxWidth='xl' sx={{ overflow: 'hidden', position: 'relative' }}>
                        <Stack direction='column' justifyContent='center' alignItems='center' gap={2} width='100%'>
                            <SectionTitle title='Achievements' />
                            <Box width='100%' maxWidth='1200px' position='relative'>
                                {/* Left Arrow */}
                                <IconButton
                                    onClick={handlePrevious}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '-60px',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                        zIndex: 2,
                                        fontSize: 24,
                                        borderRadius: '50%',
                                        padding: '5px',
                                    }}
                                >
                                    <ArrowBackIosIcon />
                                </IconButton>

                                {/* Carousel Container */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 4, // Increased gap for larger images
                                        overflow: 'hidden',
                                        width: '100%',
                                        position: 'relative',
                                    }}
                                >
                                    {/* Carousel Track */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 4, // Increased gap for larger images
                                            transform: `translateX(-${currentIndex * (100 / imagesToShow)}%)`, // Slide animation
                                            transition: 'transform 0.3s ease-in-out', // Faster transition
                                        }}
                                    >
                                        {achievements.map((achievement: IAchievement, index: number) => (
                                            <Box
                                                key={index}
                                                onClick={() => handleImageClick(achievement.image)}
                                                sx={{
                                                    flex: `0 0 ${100 / imagesToShow}%`, // Each image takes equal width
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                    borderRadius: '8px',
                                                    overflow: 'hidden',
                                                    cursor: 'pointer',
                                                    height: '300px', // Larger height
                                                }}
                                            >
                                                <img
                                                    src={achievement.image}
                                                    alt={`Achievement ${index + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'contain', // Ensures the image is not zoomed in
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>

                                {/* Right Arrow */}
                                <IconButton
                                    onClick={handleNext}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '-60px',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                        zIndex: 2,
                                        fontSize: 24,
                                        borderRadius: '50%',
                                        padding: '5px',
                                    }}
                                >
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Box>
                        </Stack>
                    </Container>
                </Box>
            </Element>
            {isAchievementModalOpen && <AchievementModal />}
        </>
    );
}

export default AchievementsSection;
