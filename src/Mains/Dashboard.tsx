import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Dashboard = (props:any) => {
  debugger
  return (
    <>
    <Typography gutterBottom variant="h4">
        About
    </Typography>
    {/* <Box sx={{ width: '100%', maxWidth: 500 }}> */}
    <Typography variant="h6">
    {`React-Utility-Table is built with React and Typescript. It allows
        all the CRUD operation to be done that a table must have features with Excel Download option.`}
      </Typography>
      {/* </Box> */}
    </>
    
  );
};

export default Dashboard;