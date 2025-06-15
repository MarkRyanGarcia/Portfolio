import { Box, Stack, Typography } from "@mui/material";

export default function Home() {

    return (
        <Box sx={{ width: '100%', textAlign: 'center', }}>
            <Stack spacing={1} >
                <Typography variant='h3' color='textSecondary'><strong>Mark Ryan Garcia</strong></Typography>
                
            </Stack>
        </Box>
    );
}
