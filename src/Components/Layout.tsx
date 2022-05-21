import { Grid } from '@mui/material'
import React from 'react'

export default function Layout(props:any) {

    return (
        <Grid container xs={12} style={{justifyContent:"space-between"}}>
            <Grid item xs={5}>
                <textarea style={{height:"300px", width:"100%"}}>{props.code}</textarea>
            </Grid>

            <Grid item xs={6}>
                {props.ui}
            </Grid>
        </Grid>
    )
}
