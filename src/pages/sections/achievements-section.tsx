import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

function AchievementsSection() {
    const isAchievementModalOpen = useSelector((state: RootState) => state.achievementModal.isOpen);

    const dispatch = useDispatch();

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 900,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    function NextArrow(props: any) {
        const { onClick } = props;
        return (
            <IconButton
                onClick={onClick}
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
        );
    }

    function PrevArrow(props: any) {
        const { onClick } = props;
        return (
            <IconButton
                onClick={onClick}
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
        );
    }

    function handleImageClick(imageUrl: string) {
        dispatch(setIsAchievementModalOpen(true));
        dispatch(setAchievementModalSelectedItem(imageUrl));
    }

    return (
        <>
            <Element name='achievements'>
                <Box my={2} width='100%' bgcolor='white' pt={{ lg: 6, xl: 8 }} pb={{ lg: 8, xl: 10 }}>
                    <Container maxWidth='xl' sx={{ overflow: 'hidden', position: 'relative' }}>
                        <Stack direction='column' justifyContent='center' alignItems='center' gap={2} width='100%'>
                            <SectionTitle title='Achievements' />
                            <Box width='100%' maxWidth='1200px' position='relative'>
                                <Slider {...settings}>
                                    {achievements.map((achievement: IAchievement, index: number) => (
                                        <Box
                                            key={index}
                                            onClick={() => handleImageClick(achievement.image)}
                                            display='flex'
                                            justifyContent='center'
                                            alignItems='center'
                                            p={1}
                                            sx={{
                                                width: '100%',
                                                height: '300px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <img
                                                src={achievement.image}
                                                alt={`Achievement ${index + 1}`}
                                                style={{
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '8px',
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Slider>
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
