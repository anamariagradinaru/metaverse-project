import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function HeaderComponent() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Website
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderComponent;
