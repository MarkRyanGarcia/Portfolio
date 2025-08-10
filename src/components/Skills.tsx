import { Box, Chip, Stack, Typography } from "@mui/material";
import { textHighlight } from "../pages/Home";
import MinIO from '/icons/minio.svg';

interface skillsChip {
    name: string;
    icon: any;
}

export default function Skills() {
    const languages: skillsChip[] = [
        {
            name: "JavaScript",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "TypeScript",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "HTML",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "CSS",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "Python",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height={'30rem'} width={'30rem'} />
        },
        {
            name: "C++",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "C#",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "MySQL",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "GDScript",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" height={'20rem'} width={'20rem'} />
        },

    ];

    const frameworks: skillsChip[] = [
        {
            name: "React",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "Svelte",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "Nodejs",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "FastAPI",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "Flask",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" height={'20rem'} width={'20rem'} />
        },
    ];

    const other: skillsChip[] = [
        {
            name: "npm",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "Material-UI",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "MinIO",
            icon: <img src={MinIO} height={'20rem'} width={'20rem'} />
        },
        {
            name: "Docker",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "Unity",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "Godot",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "Linux",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" height={'20rem'} width={'20rem'} />
        },
        {
            name: "Figma",
            icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" height={'20rem'} width={'20rem'} />
        },


    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '70%', textAlign: 'center', alignItems: 'center' }} >
            <Stack>
                <Typography variant="h5">
                    <strong>My <span style={textHighlight}>Skills</span></strong>
                </Typography>
                <Typography variant="caption">
                    Languages
                </Typography>
                <Stack direction={"row"} sx={{ flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
                    {languages.map((item, idx) => (
                        <Chip
                            key={idx}
                            sx={{
                                px: 1,
                                py: 2,
                                m: 0.5,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-3px)',
                                    backgroundColor: '#ecececff',
                                },
                            }}
                            label={item.name}
                            icon={item.icon}
                        />
                    ))}
                </Stack>

                <Typography variant="caption">
                    Frameworks
                </Typography>
                <Stack direction={"row"} sx={{ flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
                    {frameworks.map((item, idx) => {
                        return (
                            <Chip
                                key={idx}
                                sx={{
                                    px: 1,
                                    py: 2,
                                    m: 0.5,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        backgroundColor: '#ecececff',
                                    },
                                }}
                                label={item.name}
                                icon={item.icon}
                            />
                        );
                    })}
                </Stack><Typography variant="caption">
                    Other Tools
                </Typography>
                <Stack direction={"row"} sx={{ flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
                    {other.map((item, idx) => {
                        return (
                            <Chip
                                key={idx}
                                sx={{
                                    px: 1,
                                    py: 2,
                                    m: 0.5,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        backgroundColor: '#ecececff',
                                    },
                                }}
                                label={item.name}
                                icon={item.icon}
                            />
                        );
                    })}
                </Stack>
            </Stack>
        </Box>
    );
}
