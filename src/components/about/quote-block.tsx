import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface QuoteBlockProps {
    minHeight: { [key: string]: string | number };
}

function QuoteBlock({ minHeight }: QuoteBlockProps) {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='100%'
            p={4}
            mx={{ xl: 8 }}
            mb={{ xs: 2, md: 0 }}
            sx={{ minHeight }}
        >
            <Stack direction='column' sx={{ height: '100%' }} justifyContent='center' gap={2}>
                <Typography align='justify'>
                    ‘Photography, is my endless quest to capture not what I actually see, but what I would really like
                    to see. My work is mostly influenced by minimalism, impressionism and abstract visual art styles,
                    creating simplistic fine-art compositions’.
                </Typography>
                <Link to='/contact' style={{ marginTop: 'auto' }}>
                    <Button color='primary' variant='contained' sx={{ borderRadius: '4px', p: 2 }}>
                        Get In Touch
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
}

export default QuoteBlock;
