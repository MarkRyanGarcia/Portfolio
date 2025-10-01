import { GitHub, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { Divider, Grid, IconButton, Snackbar, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import DiscordIcon from "../../public/icons/discord.svg?react";
import { useState } from 'react';

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [openClipboardAlert, setClipboardAlertOpen] = useState(false);

    const discordUsername = "markgdev";

    return (
        <Stack
            component="footer"
            sx={{
                py: 2,
                px: { md: 15, xs: 2 },
                mt: 'auto',
                background: 'linear-gradient(60deg, #05A3FF 0%, #053A75 100%)',
            }}
        >
            <Grid container spacing={isMobile ? 4 : 15} justifyContent={"center"}>
                <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: isMobile ? "center" : "left" }} order={{ xs: 2, md: 1 }}>
                    <Stack spacing={0} alignItems={isMobile ? "center" : "flex-start"}>
                        <Typography variant="h6" color="white">
                            <strong>Connect</strong>
                        </Typography>
                        <Stack direction="row" spacing={1} justifyContent={isMobile ? "center" : "flex-start"}>
                            <Tooltip title={discordUsername} placement='top'><IconButton
                                onClick={() => {
                                    navigator.clipboard.writeText(discordUsername);
                                    setClipboardAlertOpen(true);
                                }}
                                sx={{
                                    color: "#dddddd",
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover": {
                                        color: "white",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                <DiscordIcon style={{ height: 25, width: 25, fill: "currentColor" }} />
                            </IconButton>
                            </Tooltip>
                            <Snackbar
                                open={openClipboardAlert}
                                autoHideDuration={1500}
                                onClose={() => { setClipboardAlertOpen(false); }}
                                message="Copied to Clipboard"
                            />
                            <IconButton href="https://instagram.com/mark.r.ga/" target="_blank" sx={{ color: '#dddddd', "&:hover": { color: 'white' } }}>
                                <Instagram />
                            </IconButton>
                            <IconButton href="https://github.com/MarkRyanGarcia" target="_blank" sx={{ color: '#dddddd', "&:hover": { color: 'white' } }}>
                                <GitHub />
                            </IconButton>
                            <IconButton href="https://linkedin.com/in/markryangarcia" target="_blank" sx={{ color: '#dddddd', "&:hover": { color: 'white' } }}>
                                <LinkedIn />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }} order={{ xs: 1, md: 2 }}>
                    <Stack spacing={1}>
                        <Typography variant="h6" color="white">
                            <strong>Mark Ryan Garcia </strong>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="a"
                            sx={{
                                color: "#dddddd",
                                textDecoration: "none",
                                "&:hover": {
                                    color: "white",
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            © {new Date().getFullYear()} | Made with 💗
                        </Typography>
                    </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: isMobile ? "center" : "right" }} order={3}>
                    <Stack spacing={0} alignItems={isMobile ? "center" : "flex-end"}>
                        <Typography variant="h6" color="white">
                            <strong>See More</strong>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="a"
                            href="https://acmcsuf.com/"
                            target="_blank"
                            sx={{
                                color: "#dddddd",
                                textDecoration: "none",
                                "&:hover": {
                                    color: "white",
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            ACM at CSUF
                        </Typography>
                        <Typography
                            variant="body1"
                            component="a"
                            href="https://github.com/MarkRyanGarcia/Portfolio"
                            target="_blank"
                            sx={{
                                color: "#dddddd",
                                textDecoration: "none",
                                "&:hover": {
                                    color: "white",
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            Source Code
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            {/* <Divider variant='middle' sx={{ backgroundColor: '#fcfcfc', my: 1  }}></Divider>
            <Typography variant="body2" color="white" sx={{ paddingTop: 1, alignSelf: 'center' }}>
                © {new Date().getFullYear()} | Made with 💗 by Markypoo
            </Typography> */}
        </Stack>
    );
}