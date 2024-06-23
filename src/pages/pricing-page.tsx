import { Box } from '@mui/material';
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
        </Box>
    );
}

export default PricingPage;
