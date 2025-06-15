import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const tab = location.pathname === '/' ? 'home' : location.pathname.slice(1);

    const handleTabClick = (_: React.SyntheticEvent, newValue: string) => {
        navigate(newValue === 'home' ? '/' : `/${newValue}`);
    };

    return (
        <>
            <AppBar position='fixed' sx={{ background: 'linear-gradient(60deg, #05A3FF 0%, #053A75 100%)' }}>
                <Toolbar>
                    <Typography
                        variant='h5'
                        sx={{ flexGrow: 1, cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        <strong>Mark Garcia</strong>
                    </Typography>
                    <Tabs
                        value={tab}
                        onChange={handleTabClick}
                        textColor="inherit"
                        indicatorColor='primary'
                        slotProps={{ indicator: { sx: { height: 3 } } }}>
                        <Tab value="home" label="Home" />
                        <Tab value="projects" label="Projects" />
                        <Tab value="contact" label="Contact" />
                        {/* <Tab label="Resume" /> */}
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}