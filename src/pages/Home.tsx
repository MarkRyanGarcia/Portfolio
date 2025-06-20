import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

export default function Home() {
    const textHighlight = { color: '#0593ea' };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', textAlign: 'center', alignItems: 'center', py: { xs: 4, md: 15 } }} >
            <Stack spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Avatar
                        src="/mark/mark.png"
                        sx={{
                            width: 'clamp(160px, 20vw, 250px)',
                            height: 'clamp(160px, 20vw, 250px)',
                            borderRadius: '50%',
                            border: '5px solid #053A75',
                            transition: 'border 0.2s ease-in-out',
                            '&:hover': {
                                border: '5px solid #05A3FF',
                            },
                        }}
                    />
                    <Stack sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: 540, p: 2 }} spacing={1}>
                        <Typography variant="h4">
                            <strong>👋 Hi, <span style={textHighlight}>I'm Mark :)</span></strong>
                        </Typography>
                        <Typography>
                            An undergraduate student at <strong style={textHighlight}>CSU Fullerton</strong> 🐘 | CS Major, Math Minor
                        </Typography>
                        <Typography>
                            💼 <strong><span style={textHighlight}>SWE Intern</span></strong> at Glenair, Inc. - Summer 2025
                        </Typography>
                        <Typography>
                            👨‍💼 <strong><span style={textHighlight}>President</span></strong> of <a href="https://acmcsuf.com" target="_blank">Association for Computing Machinery, CSUF Chapter</a>
                        </Typography>
                        <Typography>
                            📐 <strong><span style={textHighlight}>Supplemental Instructor</span></strong> for Calc II at CSU Fullerton
                        </Typography>
                        <Typography>
                            💻 I have experience with: Python, JavaScript, Typescript, HTML/CSS, C/C++, C#, GDScript, Intel x86-64 ISA, SQL, and always learning more...
                        </Typography>
                        <Typography>
                            💯 Fun fact: I have a collection of <strong><span style={textHighlight}>60+ Rubik's Cubes</span></strong>
                        </Typography>
                    </Stack>
                </Stack>
                <Button
                    variant="outlined"
                    href="https://github.com/MarkRyanGarcia/Resume/blob/main/resume.pdf"
                    target="_blank"
                >Check out my Resume</Button>
            </Stack>
        </Box>
    );
}
