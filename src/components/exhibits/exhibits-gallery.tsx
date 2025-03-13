import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useState } from 'react';
import { IExhibits } from '../../interfaces/global.interface';

interface GalleryProps {
    exhibits: IExhibits[];
}

function ExhibitsGallery({ exhibits }: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    // Navigate to the next exhibit
    const nextExhibit = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % exhibits.length);
        }, 500); // Delay the change to allow for the transition animation to complete
    };

    // Navigate to the previous exhibit
    const prevExhibit = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? exhibits.length - 1 : prevIndex - 1));
        }, 500); // Delay the change to allow for the transition animation to complete
    };

    return (
        <Box
            position='relative'
            display='flex'
            justifyContent='center'
            width={{ xs: '100%', lg: '100%', xl: '100%' }}
            height={{ xs: '100%', lg: '80vh', xl: '80vh' }}
            overflow='hidden'
            borderRadius={1}
        >
            {/* Left Arrow */}
            <IconButton
                onClick={prevExhibit}
                sx={{
                    position: 'absolute',
                    left: 8,
                    top: '50%',
                    color: 'white',
                    zIndex: 1,
                }}
            >
                <ArrowBackIos />
            </IconButton>

            {/* Image with fade transition */}
            <Box
                component='img'
                src={exhibits[currentIndex]?.image}
                alt={exhibits[currentIndex]?.name}
                width='100%'
                height='auto'
                sx={{
                    aspectRatio: '16 / 9',
                    objectFit: 'cover',
                    opacity: isTransitioning ? 0 : 1,
                    transition: 'opacity 0.5s ease-in-out',
                }}
                onTransitionEnd={() => setIsTransitioning(false)}
            />

            {/* Exhibit Name */}
            <Box
                position='absolute'
                bottom={16}
                left={16}
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '4px',
                }}
            >
                <Typography variant='h6'>{exhibits[currentIndex]?.name}</Typography>
            </Box>

            {/* Right Arrow */}
            <IconButton
                onClick={nextExhibit}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    color: 'white',
                    zIndex: 1,
                }}
            >
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
}

export default ExhibitsGallery;
