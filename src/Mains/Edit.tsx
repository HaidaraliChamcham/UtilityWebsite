import { Grid } from '@mui/material'
import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'

export default function Edit() {
    return (
        <>
            <Grid container item xs={12}>
                <Grid item xs={5}>
                    hi
                    {/* <LiveProvider code="<strong>Hello World!</strong>">
                        <LiveEditor />
                        <LiveError />
                        <LivePreview />
                    </LiveProvider> */}
                </Grid>
                <Grid item xs={12}>
                    hi
                </Grid>

            </Grid>
        </>
    )
}
