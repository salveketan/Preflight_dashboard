import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

export default function Navbar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("PreFlight")) || [];


    const Logout = () => {
        localStorage.removeItem("PreFlight")
        navigate("/")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pre Flight
                    </Typography>
                    <Button color="inherit" onClick={Logout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}