import { Box, Divider, Paper, Stack, Typography } from '@mui/material';

interface AchievementsBlockProps {
    minHeight: { [key: string]: string | number };
}

function AchievementsBlock({ minHeight }: AchievementsBlockProps) {
    return (
        <Box height='100%' width='auto' display='flex' justifyContent='center' alignItems='center'>
            <Paper elevation={0} sx={{ height: '100%', width: 'auto', p: { xs: 4, xl: 7 }, minHeight }}>
                <Stack
                    direction='column'
                    fontSize={14}
                    spacing={1}
                    sx={{ height: '100%' }}
                    justifyContent='center'
                    gap={2}
                >
                    <Typography variant='h6' fontWeight={500}>
                        ACHIEVEMENTS
                    </Typography>
                    <Divider />
                    <li>35AWARDS 2023 Top 1% "Man and Landscape"</li>
                    <li>The UCP Club Photographer Of the Month June 2022</li>
                    <li>35AWARDS 2022 Top 70</li>
                    <li>NOIR Magazine Cover Page 2022</li>
                    <li>CLUB of BWP Photographer of the Month October 2022</li>
                    <li>CLUB of BWP Photographer of the Month July 2022</li>
                    <li>CLUB Of BWP Photographer of the Month May 2022</li>
                    <li>OLYMPUSPASSION Magazine Cover Page 2021</li>
                    <li>35AWARDS 2019 Top 100</li>
                </Stack>
            </Paper>
        </Box>
    );
}

export default AchievementsBlock;
