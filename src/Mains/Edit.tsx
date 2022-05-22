import { Grid } from '@mui/material'
import MDEditor from '@uiw/react-md-editor'
import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

export default function Edit() {
    return (
        <>
            <Grid container item xs={12}>

                <Grid item xs={10}>
                <MDEditor
                        value={"hi"}
                    />
                </Grid>
                    {/* <LiveProvider code="<strong>Hello World!</strong>">
                        <LiveEditor />
                        <LiveError />
                        <LivePreview />
                    </LiveProvider> */}
                   

            </Grid>
        </>
    )
}
