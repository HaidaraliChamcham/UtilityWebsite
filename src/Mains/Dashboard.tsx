import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Install from './Install';

const Dashboard = (props: any) => {
  debugger
  return (
    <>
      <div>
        <p>
          This utility-table is built with <strong>React</strong> and <strong>Typescript</strong>.
          <br></br>
          It allows all the <strong>CRUD operation</strong> to be done that a table must have features with <strong>Excel Download option</strong>.
        </p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Install />
      </div>
    </>

  );
};

export default Dashboard;