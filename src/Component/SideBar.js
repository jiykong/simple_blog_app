import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { List } from '@mui/icons-material';

const testDrawer = createTheme({
    components: {
        // Name of the component
        MuiDrawer: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
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



    return (
        <React.Fragment>
            <ThemeProvider theme={testDrawer}>
                <Drawer
                    anchor="left"
                    open={props.open}

                >
                    <List>
                       
                    </List>
                </Drawer>
            </ThemeProvider>
        </React.Fragment>
    );
}