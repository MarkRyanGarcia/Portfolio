import { Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

interface Links {
    Deployment?: string;
    Github?: string;
}

interface Project {
    title: string;
    description: string;
    image_path: string;
    links?: Links;
}

export default function Projects() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const projects: Project[] = [
        {
            title: 'DoodleJump Workshop',
            description: 'As part of a beginner-friendly Unity workshop I led, I developed a 2D platformer game inspired by Doodle Jump to teach the fundamentals of game development using Unity and C#.',
            image_path: '/public/ProjectImages/doodlejump1.png',
            links: {
                Github: 'https://github.com/MarkRyanGarcia/Doodle-Jump-Gamedev-SP25'
            }
        },
        {
            title: 'Marktris',
            description: 'A Tetris clone made in godot. It includes many in-game features to make the game as faithful to modern tetris as possible. This includes 7-bag, wall-kicks, and the Super Rotation System. Warning: Use Chrome for best experience.',
            image_path: '/public/ProjectImages/marktris2.png',
            links: {
                Deployment: 'https://marktris.markg.dev/',
            }
        },
        {
            title: 'Portolio Site',
            description: "Hey what's this doing here?",
            image_path: '/public/ProjectImages/portfolio.png',
            links: {
                Deployment: 'https://markg.dev/',
                Github: 'https://github.com/MarkRyanGarcia/Portfolio'
            }
        },
    ];

    return (
        <Stack spacing={1} sx={{ textAlign: 'center', alignItems: 'center', }}>
            <Typography variant='h3' color='textSecondary' sx={{ py: 2 }}><strong>Check out my <span style={{ color: '#0593ea' }}>Projects!</span></strong></Typography>
            {!isMobile
                ? (
                    projects.map((project, project_index) => {
                        const isOdd = project_index % 2 === 0;
                        console.log('links', project.links)
                        return (
                            <Stack sx={{ alignItems: 'center', width: '100%', backgroundColor: `${isOdd ? '' : 'rgba(200, 200, 200, .25)'}` }}>
                                <Stack sx={{ width: '50vw', py: 1 }}>
                                    <Stack direction={`row${isOdd ? '-reverse' : ''}`} sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={2}>
                                        <Stack spacing={1}>
                                            <Typography variant='h6'>{project.title}</Typography>
                                            <Typography variant='caption' sx={{ width: '20vw' }}>{project.description}</Typography>
                                            {project.links && (
                                                <Stack direction={'row'} sx={{ justifyContent: 'center' }} spacing={2}>
                                                    {project.links.Deployment && (
                                                        <Button variant="contained" color='info' href={project.links.Deployment} target="_blank">Visit Site</Button>
                                                    )}
                                                    {project.links.Github && (
                                                        <Button variant="contained" color='info' href={project.links.Github} target="_blank">Github</Button>
                                                    )}
                                                </Stack>
                                            )}
                                        </Stack>
                                        <img src={project.image_path} alt={`${project.title} image`} style={{ width: 250, borderRadius: 5 }} />
                                    </Stack>
                                </Stack>
                            </Stack>
                        );
                    })
                ) : (
                    projects.map((project, project_index) => {
                        const isOdd = project_index % 2 === 0;
                        return (
                            <Stack sx={{ alignItems: 'center', width: '100%', backgroundColor: `${isOdd ? '' : 'rgba(5, 147, 234, .25)'}` }}>
                                <Stack sx={{ width: '70vw', p: 1 }}>
                                    <Stack sx={{ textAlign: 'center', alignItems: 'center', }} spacing={2}>
                                        <Typography variant='h6'>{project.title}</Typography>
                                        <Typography variant='caption' sx={{}}>{project.description}</Typography>
                                        <img src={project.image_path} alt={`${project.title} image`} style={{ width: 250, borderRadius: 5 }} />
                                        {project.links && (
                                            <Stack direction={'row'} sx={{ justifyContent: 'center' }} spacing={2}>
                                                {project.links.Deployment && (
                                                    <Button variant="contained" color='info' href={project.links.Deployment} target="_blank">Visit Site</Button>
                                                )}
                                                {project.links.Github && (
                                                    <Button variant="contained" color='info' href={project.links.Github} target="_blank">Github</Button>
                                                )}
                                            </Stack>
                                        )}
                                    </Stack>
                                </Stack>
                            </Stack>
                        );
                    })
                )
            }
        </Stack>
    );
}
