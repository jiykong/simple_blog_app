import * as React from 'react';
import { Link } from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { List, ListItem, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

// Theme that will allow sidebar to remain below header
const DrawerTheme = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                root: {
                    position: "relative !important",
                    "& .MuiBackdrop-root": {
                        position: "relative !important"
                    }
                },
                paper: {
                    position: "absolute !important",
                    height: "100vh",
                    minWidth: '10%'
                }
            },
        },
    },
});


/*
## Sidebar Component that will trigger left/right based on parent data
## takes in props "open"
*/
export default function SideBar(props) {


    const IconStyle = {
        minWidth: '62px',
        fontSize: 'xx-large',
        verticalAlign: 'bottom'
    }

    const LinkStyle = {
        color: 'black',
        textDecoration: 'none'
        
    }

    return (
        <React.Fragment>
            <ThemeProvider theme={DrawerTheme}>
                <Drawer
                    anchor="left"
                    open={props.open}
                    variant='persistent'
                >
                    <List>
                        <ListItem>
                            <Link to="/" style={LinkStyle}><HomeIcon style={IconStyle}></HomeIcon> Home</Link>
                        </ListItem>
                        <Divider orientation="horizontal" variant="middle" style={{ backgroundColor: '#d8dce4' }} flexItem />
                        <ListItem>
                            <Link to="/blog" style={LinkStyle}><SpeakerNotesIcon style={IconStyle}></SpeakerNotesIcon> My Story</Link>
                        </ListItem>
                        {/* <Divider orientation="horizontal" variant="middle" style={{ backgroundColor: '#d8dce4' }} flexItem />
                        <ListItem>
                            <Link to="/tasks" style={LinkStyle}><AssignmentIcon style={IconStyle}></AssignmentIcon> Todo List</Link>
                        </ListItem>
                        <Divider orientation="horizontal" variant="middle" style={{ backgroundColor: '#d8dce4' }} flexItem />
                        <ListItem>
                            <Link to="/recipes" style={LinkStyle}><RestaurantMenuIcon style={IconStyle}></RestaurantMenuIcon> Wifes Recipes</Link>
                        </ListItem> */}
                    </List>
                </Drawer>
            </ThemeProvider>
        </React.Fragment>
    );
}