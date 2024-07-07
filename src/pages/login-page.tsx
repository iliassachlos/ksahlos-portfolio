import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { emailValidation } from '../utils/email-validation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../components/shared/alerts/error-alert';
import { useAuth } from '../hooks/use-auth';
import Spinner from '../components/shared/spinner';

function LoginPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailErrorHelperText, setEmailErrorHelperText] = useState<string>('');

    const [errorMessage, setErrorMessage] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(true);

    const navigate = useNavigate();
    const user = useAuth();

    useEffect(() => {
        if (user) {
            navigate('/admin');
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    // Checks if email input has valid form or not
    function emailValidationHandler(e: ChangeEvent<HTMLInputElement>) {
        const isValidated = emailValidation(e.target.value);
        if (isValidated) {
            setEmailError(false);
            setEmailErrorHelperText('');
        } else {
            setEmailError(true);
            setEmailErrorHelperText('Please provide a valid Email');
        }
    }

    // Login User
    async function loginHandler() {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch (error: any) {
            console.log(error);
            if (typeof error === 'string') {
                setErrorMessage(error);
            } else if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('An unknown error occurred');
            }
        }
    }

    return (
        <Container>
            <Box display='flex' justifyContent='center' alignItems='center' height='89vh'>
                {loading && <Spinner />}
                {!loading && (
                    <Stack
                        direction='column'
                        alignItems='center'
                        spacing={4}
                        width='100%'
                        maxWidth={550}
                        bgcolor='white'
                        p={8}
                        borderRadius='4px'
                    >
                        <Typography variant='h4'>Admin Panel</Typography>
                        {errorMessage.length > 0 && <ErrorAlert text={errorMessage} />}
                        <TextField
                            variant='outlined'
                            label='Email'
                            placeholder='Enter Email'
                            fullWidth
                            required
                            error={emailError}
                            helperText={emailErrorHelperText}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setEmail(e.target.value);
                                emailValidationHandler(e);
                            }}
                        />
                        <TextField
                            variant='outlined'
                            label='Password'
                            placeholder='Enter Password'
                            fullWidth
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth
                            sx={{ maxWidth: 250 }}
                            onClick={loginHandler}
                        >
                            Login
                        </Button>
                    </Stack>
                )}
            </Box>
        </Container>
    );
}

export default LoginPage;