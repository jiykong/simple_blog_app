import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { List, ListItem, Divider } from "@mui/material";
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
        fontSize: 'xx-large'
    }

    return (
        <React.Fragment>
            <ThemeProvider theme={DrawerTheme}>
                <Drawer
                    anchor="left"
                    open={props.open}
                >
                    <List>
                        <ListItem>
                            <SpeakerNotesIcon style={IconStyle}></SpeakerNotesIcon> My Story
                        </ListItem>
                        <Divider orientation="horizontal" variant="middle" style={{ backgroundColor: '#d8dce4' }} flexItem />
                        <ListItem>
                            <AssignmentIcon style={IconStyle}></AssignmentIcon> Todo List
                        </ListItem>
                        <Divider orientation="horizontal" variant="middle" style={{ backgroundColor: '#d8dce4' }} flexItem />
                        <ListItem>
                            <RestaurantMenuIcon style={IconStyle}></RestaurantMenuIcon> Wifes Recipes
                        </ListItem>
                    </List>
                </Drawer>
            </ThemeProvider>
        </React.Fragment>
    );
}