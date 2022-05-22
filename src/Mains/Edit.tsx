import { Grid } from '@mui/material'
import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import Demo from '../Demo/Demo';

export default function Edit() {
   

    return (
        <>

            <LiveProvider code="<strong>Hello World!</strong>">
                <LiveEditor />
                <LiveError />
                <LivePreview />
            </LiveProvider>

            
        </>
    )
}
