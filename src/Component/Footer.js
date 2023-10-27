import * as React from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Typography, Toolbar, Divider } from "@mui/material";


/*
## Footer Component that will contain the access to contact us page
*/
export default function Footer(props) {

    const headerStyle = {
        backgroundColor: '#699CFE',
        minHeight: "63px",
        maxHeight: "10%",
        display: 'flex',

    }
    const titleStyle = {
        color: 'white',
        padding: '0 20px 0 0',
        display: 'inherit',
        minWidth: '7%',
        fontSize: "145%"
    }
    const menuIconStyle = {
        color: 'white',
        padding: '0px 10px 0px 10px',
        minWidth: '62px',
        fontSize: 'xx-large'
    }

    return (
        <React.Fragment>
            <AppBar position="static" style={headerStyle}>
                <Toolbar style={headerStyle}>
                    <Typography style={titleStyle}>Jinius Toolbox</Typography>
                    <Divider orientation="vertical" variant="middle" style={{ backgroundColor: '#d8dce4' }} flexItem />
                    {
                        props.side_bar ?
                            <MenuOpenIcon style={menuIconStyle} onClick={props.toggleSideBar}></MenuOpenIcon> :
                            <MenuIcon style={menuIconStyle} onClick={props.toggleSideBar}></MenuIcon>
                    }
                </Toolbar>


            </AppBar>
        </React.Fragment>
    );
}