import { AppBar, Toolbar, Typography, Tabs, Tab, IconButton, Menu, MenuItem, useMediaQuery, useTheme, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const tabValue = location.pathname.slice(1);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTabSelect = (navRoute: string) => {
        navigate(navRoute);
        handleClose();
    };

    const navItems = [
        { label: 'Home', navRoute: '/' },
        { label: 'Projects', navRoute: '/projects' },
        { label: 'Contact', navRoute: '/contact' },
    ];

    return (
        <AppBar position="sticky" sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            background: 'linear-gradient(60deg, #05A3FF 0%, #053A75 100%)',
          }}>
            <Toolbar>
                <Typography
                    variant="h5"
                    sx={{ flexGrow: 1, cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                >
                    <strong>Mark Ryan Garcia</strong>
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton color="inherit" onClick={handleMenuClick}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={!!anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                            {navItems.map((item) => (
                                <MenuItem key={item.navRoute} onClick={() => handleTabSelect(item.navRoute)}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Tabs
                        value={tabValue}
                        onChange={(_, newValue) => handleTabSelect(newValue)}
                        textColor="inherit"
                        indicatorColor="primary"
                        slotProps={{ indicator: { sx: { height: 3 } } }}
                    >
                        {navItems.map((item) => (
                            <Tab key={item.navRoute} value={item.navRoute} label={item.label} />
                        ))}
                    </Tabs>
                )}
            </Toolbar>
        </AppBar>
    );
}