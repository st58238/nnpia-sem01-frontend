import React, {useEffect} from "react";

import "./Common.css"
import {AppBar, Box} from "@mui/material";


const Footer = () => {

    return <Box className="footer" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <p>Made by Janys &copy;2023</p>
        </AppBar>
    </Box>
};

export default Footer;