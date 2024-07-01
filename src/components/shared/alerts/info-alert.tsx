import { Alert } from '@mui/material';

interface IAlertProps {
    text: string;
}

function InfoAlert({ text }: IAlertProps) {
    return <Alert severity='info'>{text}</Alert>;
}

export default InfoAlert;
