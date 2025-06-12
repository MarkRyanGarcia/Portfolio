import { Container, Stack, Typography } from "@mui/material";

export default function Projects() {

    return (
        <Container sx={{ textAlign: 'center' }}>
            <Stack spacing={1} sx={{ marginTop: 1}}>
                <Typography variant='h3' color='textSecondary'><strong>Projects Page</strong></Typography>
            </Stack>
        </Container>
    )
}
