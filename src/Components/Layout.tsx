import { Grid } from '@mui/material'
import React from 'react'

export default function Layout(props:any) {

    return (
        <Grid container item xs={12} style={{justifyContent:"space-between"}}>
            <Grid item xs={5}>
            {props.code}
            </Grid>

            <Grid item xs={6}>
                {props.ui}
            </Grid>
        </Grid>
    )
}
