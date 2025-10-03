import { Box, Chip, Stack, Typography } from "@mui/material";
import { textHighlight } from "../pages/Home";
import MinIO from "../../public/icons/minio.svg";

interface skillsChip {
    name: string;
    icon: any;
}

export default function Skills() {
    const languages: skillsChip[] = [
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        },
        {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        },
        {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        },
        {
            name: "C++",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        },
        {
            name: "C#",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
        },
        {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
        },
    ];

    const frameworks: skillsChip[] = [
        {
            name: "Nodejs",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        },
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        },
        {
            name: "Svelte",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
        },
        {
            name: "FastAPI",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
        },
        {
            name: "Flask",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
        },
    ];

    const other: skillsChip[] = [
        {
            name: "npm",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg"
        },
        {
            name: "Material-UI",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
        },
        {
            name: "MinIO",
            icon: MinIO
        },
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        },
        {
            name: "Unity",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
        },
        {
            name: "Godot",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg"
        },
        {
            name: "Linux",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
        },
        {
            name: "Figma",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
        },
    ];

    function SkillSection(title: string, chipList: skillsChip[]) {
        return (
            <>
                <Typography variant="caption">
                    {title}
                </Typography>
                <Stack direction={"row"} sx={{ flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
                    {chipList.map((item, idx) => (
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
                            icon={<img src={item.icon} height={'20rem'} width={'20rem'} />}
                        />
                    ))}
                </Stack>
            </>
        );
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '70%', textAlign: 'center', alignItems: 'center' }} >
            <Stack>
                <Typography variant="h5">
                    <strong>My <span style={textHighlight}>Skills</span></strong>
                </Typography>
                {SkillSection("Languages", languages)}
                {SkillSection("Frameworks", frameworks)}
                {SkillSection("Other Tools", other)}
            </Stack>
        </Box>
    );
}
