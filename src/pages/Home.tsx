import { Stack } from "@mui/material";
import About from "../components/About";
import Skills from "../components/Skills";

export const textHighlight = { color: '#0593ea' };

export default function Home() {

    return (
        <Stack spacing={2} sx={{ justifyContent: 'center', width: '100%', textAlign: 'center', alignItems: 'center', py: { xs: 4, md: 10 } }}>
            <About />
            <Skills />
        </Stack>
    );
}
