import { Alert, Button, CircularProgress, Container, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import useWeb3Forms from '@web3forms/react';
import { Email } from '@mui/icons-material';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [resultMessage, setResultMessage] = useState<string | null>(null);

    const { submit } = useWeb3Forms({
        access_key: '4f88f749-ac12-4b49-bc9b-0ac8c40d560f',
        settings: {
            from_name: 'Portfolio Contact Form',
            subject: 'YOU HAVE A MESSAGE',
        },
        onSuccess: (msg: string) => {
            setIsSuccess(true);
            setResultMessage(msg);
            reset();
            setIsSubmitting(false);
        },
        onError: (msg: string) => {
            setIsSuccess(false);
            setResultMessage(msg);
            setIsSubmitting(false);
        },
    });

    const onSubmit = (data: FormData) => {
        setIsSubmitting(true);
        submit(data);
    };

    return (
        <Container id="contact" sx={{ textAlign: 'center', py: 4 }}>
            <Stack spacing={1} sx={{ mt: 1, alignItems: 'center' }}>
                <Typography variant="h3" sx={{ pt: 2 }} color="textSecondary">
                    <strong>
                        <span style={{ color: '#0593ea' }}>Contact</span> Me
                    </strong>
                </Typography>

                <Stack
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    spacing={2}
                    sx={{
                        width: isMobile ? '70vw' : '50vw',
                        maxWidth: '50rem',
                        p: 3,
                    }}
                >
                    {resultMessage && (
                        <Alert severity={isSuccess ? 'success' : 'error'} sx={{ mb: 2 }}>
                            {resultMessage}
                        </Alert>
                    )}

                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'Name is required' }}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                required
                                label="Name"
                                placeholder="Your Name"
                                error={!!errors.name}
                                helperText={errors.name?.message}
                                fullWidth
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter a valid email',
                            },
                        }}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                required
                                label="Email"
                                placeholder="your.email@example.com"
                                type="email"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                fullWidth
                            />
                        )}
                    />

                    <Controller
                        name="message"
                        control={control}
                        rules={{
                            required: 'Message is required',
                            maxLength: {
                                value: 500,
                                message: 'Message cannot exceed 500 characters',
                            },
                        }}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                required
                                label="Message"
                                placeholder="Your message here..."
                                multiline
                                rows={5}
                                error={!!errors.message}
                                helperText={
                                    errors.message?.message || `${field.value.length}/500`
                                }
                                fullWidth
                                inputProps={{
                                    maxLength: 500,
                                }}
                            />
                        )}
                    />

                    <input type="hidden" name="redirect" value="false" />

                    <Button
                        startIcon={<Email />}
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        sx={{
                            alignSelf: 'center',
                            width: 'fit-content',
                            py: 1.5,
                            px: 4,
                            fontSize: '1rem',
                            backgroundColor: '#0593ea',
                            '&:hover': {
                                backgroundColor: '#0481d1',
                            },
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <CircularProgress size={24} sx={{ color: 'white', mr: 1 }} />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}