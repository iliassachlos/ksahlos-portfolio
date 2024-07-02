import { Alert } from '@mui/material';

interface IErrorAlert {
    text: string;
}

function ErrorAlert({ text }: IErrorAlert) {
    return <Alert severity='error'>{text}</Alert>;
}

export default ErrorAlert;
