import React from 'react'
import { Grid,  Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Header() {
    return (
        <header style={{ display:"flex", justifyContent:"space-between", alignItems:"center",
         width:"inherit",margin: ".5rem 2rem", gap: "1rem" }}>
                <Typography variant="h5" gutterBottom component="div" style={{margin:"0px"}}>
                    React Utility Table
                </Typography>

                <div style={{ display: "flex", gap: ".8rem" }}>

                    <GitHubIcon />
                    <LinkedInIcon />
                    <PowerSettingsNewIcon />
                </div>
               
            </header>
    )
}
