import { Box, Typography } from '@mui/material';
import PricingBox from '../components/pricing/pricing-box';

function PricingPage() {
    return (
        <Box
            width='100%'
            height='100%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            p={1}
        >
            <PricingBox />
            <Typography fontSize={14}>Above prices do not include VAT 24%, and shipping costs</Typography>
        </Box>
    );
}

export default PricingPage;
