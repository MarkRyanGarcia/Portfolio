import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Divider, Grid, IconButton, Stack, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Stack
            component="footer"
            sx={{
                py: 2,
                mt: 'auto',
                background: 'linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%)',
                textAlign: 'center',
                // width: '100vw',
            }}
        >
            <Grid container>
                <Grid size={2}></Grid>
                <Grid size={4} sx={{ textAlign: 'left' }}>
                    <Stack >
                        <Typography variant='h6' color='white' sx={{ marginBottom: 1 }}><strong>Mark Garcia</strong></Typography>
                        <Typography variant='caption' sx={{ color: '#d2d2d2' }}>Full Stack Developer</Typography>
                        <Typography variant='caption' sx={{ color: '#d2d2d2' }}>Creating digitial experiences that matter</Typography>
                    </Stack>
                </Grid>
                <Grid size={1} sx={{ textAlign: 'left' }}>
                    <Stack>
                        <Typography variant='h6' color='white' sx={{ marginBottom: 1 }}><strong>Connect</strong></Typography>
                        <Divider sx={{ backgroundColor: '#f2f2f2' }}></Divider>
                        <Stack direction={'row'}>
                            <IconButton sx={{color: '#f2f2f2'}}
                                        href='https://www.linkedin.com/in/mark-garcia-aa9b2b306/' target='_blank'>
                                <LinkedIn />
                            </IconButton>
                            <IconButton sx={{color: '#f2f2f2'}}
                                        href='https://github.com/MarkRyanGarcia' target='_blank'>
                                <GitHub />
                            </IconButton>
                            <IconButton sx={{color: '#f2f2f2'}}
                                        href='https://www.instagram.com/mark.r.ga/' target='_blank'>
                                <Instagram/>
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Divider variant='middle' sx={{ backgroundColor: '#d2d2d2', my: 1 }}></Divider>
            <Typography variant="body2" color="white" sx={{ paddingTop: 1 }}>
                © {new Date().getFullYear()} Mark Garcia. All rights reserved.
            </Typography>
        </Stack>
    );
}