import { GitHub, Language } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

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
    const projects: Project[] = [
        {
            title: 'DoodleJump Workshop',
            description: 'As part of a beginner-friendly Unity workshop I led, I developed a 2D platformer game inspired by Doodle Jump to teach the fundamentals of game development using Unity and C#.',
            image_path: '/ProjectImages/doodlejump1.png',
            links: {
                Github: 'https://github.com/MarkRyanGarcia/Doodle-Jump-Gamedev-SP25'
            }
        },
        {
            title: 'Marktris',
            description: 'A Tetris clone made in godot. It includes many in-game features to make the game as faithful to modern tetris as possible. This includes 7-bag, wall-kicks, and the Super Rotation System. Warning: Use Chrome for best experience.',
            image_path: '/ProjectImages/marktris.png',
            links: {
                Deployment: 'https://marktris.markg.dev/',
            }
        },
        {
            title: 'NeonChat',
            description: 'Submission for Fullyhacks 2024. Neonchat is a Bluetooth-based direct messaging chatbox that allows seamless communication between devices.',
            image_path: '/ProjectImages/neonchat.png',
            links: {
                Deployment: 'https://jowen-ster.github.io/FULLYHACKS_NEONCHAT/',
                Github: 'https://github.com/JOwen-ster/FULLYHACKS_NEONCHAT',
            }
        },
        {
            title: 'Portolio Site',
            description: "Hey, what's this doing here?",
            image_path: '/ProjectImages/portfolio.png',
            links: {
                Deployment: 'https://markg.dev/',
                Github: 'https://github.com/MarkRyanGarcia/Portfolio'
            }
        },
    ];

    return (
        <Stack spacing={1} sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant='h3' color='textSecondary' sx={{ py: 2 }}>
                <strong>
                    Check out my <span style={{ color: '#0593ea' }}>Projects!</span>
                </strong>
            </Typography>

            {projects.map((project, index) => {
                const isOdd = index % 2 === 0;
                const backgroundColor = isOdd ? '' : 'rgba(200, 200, 200, 0.25)';

                return (
                    <Stack
                        key={index}
                        sx={{
                            alignItems: 'center',
                            width: '100%',
                            backgroundColor,
                        }}
                    >
                        <Stack sx={{ width: { xs: '70vw', md: '50vw' }, py: 1, px: { xs: 1, md: 0 } }}>
                            <Stack
                                direction={{ xs: 'column', md: `row${isOdd ? '-reverse' : ''}` }}
                                spacing={2}
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: { xs: 'center', md: 'left' },
                                }}
                            >
                                <Stack spacing={1} sx={{ alignItems: 'center', textAlign: 'center' }}>
                                    <Typography variant='h6'>{project.title}</Typography>
                                    <Typography variant='caption' sx={{ width: { md: '20vw' } }}>
                                        {project.description}
                                    </Typography>
                                    {project.links && (
                                        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                                            {project.links.Deployment && (
                                                <Button
                                                    startIcon={<Language />}
                                                    variant="contained"
                                                    color="info"
                                                    href={project.links.Deployment}
                                                    target="_blank"
                                                >
                                                    Visit Site
                                                </Button>
                                            )}
                                            {project.links.Github && (
                                                <Button
                                                    startIcon={<GitHub />}
                                                    variant="contained"
                                                    color="info"
                                                    href={project.links.Github}
                                                    target="_blank"
                                                >
                                                    Github
                                                </Button>
                                            )}
                                        </Stack>
                                    )}
                                </Stack>
                                <img
                                    src={project.image_path}
                                    alt={`${project.title} image`}
                                    style={{ width: 250, borderRadius: 5 }}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                );
            })}
        </Stack>
    );
}