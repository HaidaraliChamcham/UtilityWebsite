import React from 'react';
import Typography from '@mui/material/Typography';
import { ReactUtilityTable } from 'react-utility-table';
import { mockutitlity } from '../MockData/mockutitlity';

const Features = (props: any) => {
    debugger
    return (
        <>
            <Typography gutterBottom variant="h4">
                Features
            </Typography>
            <Typography variant="h6">

                <ReactUtilityTable
                    columns={[
                        { title: 'SrNo', field: 'id' },
                        { title: 'First Name', field: 'first_name' },
                        { title: 'Last Name', field: 'last_name' },
                        { title: 'Email', field: 'email'},
                    ]}
                    data={mockutitlity} />

            </Typography>
        </>

    );
};

export default Features;