import React from 'react';
/*import Button from '@mui/material/Button';*/
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {AiFillSetting} from "react-icons/ai";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Settings = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <AiFillSetting
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{fontSize:"1.5rem"}}/>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem><Link to="/">Log In</Link></MenuItem>
                <MenuItem><Link to="/signup">Sign Up</Link></MenuItem>
            </Menu>
        </div>
    );
};

export default Settings;