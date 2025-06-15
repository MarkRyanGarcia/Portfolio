import { Avatar, Box, Stack, Typography } from "@mui/material";

export default function Home() {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', textAlign: 'center', }}>
            <Stack spacing={1} sx={{ alignItems: 'center', }}>
                <Typography variant='h3' color='textSecondary'><strong>Mark Ryan Garcia</strong></Typography>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Avatar
                        src="/mark/mark2.png"
                        sx={{
                            width: 'clamp(160px, 20vw, 200px)',
                            height: 'clamp(160px, 20vw, 200px)',
                            borderRadius: '50%',
                            border: '5px solid #053A75',
                            transition: 'border 0.2s ease-in-out',
                            '&:hover': {
                                border: '5px solid #05A3FF',
                            },
                        }}
                    />

                    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: 500 }}>
                        <Typography variant="h4">
                            <strong>👋 Hi, <span style={{ color: '#056FBA' }}>I'm Mark</span></strong>
                        </Typography>
                        <Typography>
                            An undergraduate student at <strong style={{ color: '#056FBA' }}>CSU Fullerton</strong> 🐘
                        </Typography>
                        <Typography>
                            CS Major, Math Minor
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}
