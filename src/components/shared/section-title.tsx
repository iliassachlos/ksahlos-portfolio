import { Typography } from '@mui/material';

interface ISectionTitleProps {
    title: string;
    fontSize?: number;
}

function SectionTitle({ title, fontSize = 24 }: ISectionTitleProps) {
    return (
        <Typography variant='h1' fontSize={fontSize} fontWeight={500}>
            {title}
        </Typography>
    );
}

export default SectionTitle;
