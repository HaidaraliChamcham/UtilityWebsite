import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { BrowserRouter, Link, NavLink, Route, Router, Routes } from 'react-router-dom';
import RouteElement from './Routes';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import GitHubIcon from '@mui/icons-material/GitHub';

const drawerWidth = 240;

function NavBar(props: any) {

    const header = (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "#5f6a97" }}>
            <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <MenuOpenIcon />
                    <Typography variant="h6" noWrap component="div">
                        React-Utility-Table
                    </Typography>
                </div>
                <div>
                    <GitHubIcon />
                </div>


            </Toolbar>
        </AppBar>
    );

    const drawer = (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                height:  "90vh",                
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', height: "90vh", background:"#fffafa" },
            }}
        >            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {RouteElement.map((item, index) => (
                        <Link to={item.path} style={{ textDecoration: "none", color: "#000000de", fontWeight: "400" }}>
                            <ListItem key={item.path} button>
                                {/* commented for now
                                 <ListItemIcon >
                                    <ArrowRightIcon style={{ display: "flex", alignItems: "center" }} />
                                </ListItemIcon> */}
                                <ListItemText primary={item.label} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );

    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {header}
                <>
                    {drawer}
                    <Toolbar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem" }}>
                        <Routes>
                            {RouteElement.map((Item, index) => (
                                <Route key={Item.path} path={Item.path} element={<Item.Component />}>
                                </Route>))}
                        </Routes>
                    </Box>
                </>
            </Box>

        </BrowserRouter>
    );
}

export default NavBar;
