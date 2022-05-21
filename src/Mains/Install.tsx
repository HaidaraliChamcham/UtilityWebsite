import React from 'react';
import Typography from '@mui/material/Typography';

const Install = (props: any) => {
  debugger
  const simpleEx = require('../Images/SimpleExample.PNG');
  return (
    <>
      <p>
        <strong> Installation---Getting Started! </strong>
        <br></br>
        Install this package : <strong>npm i react-utility-table </strong>
      </p>
      <div>
        <p>
          <strong>Basic example</strong> : Pass <strong>columns</strong> and <strong> data </strong> to the React-Utitlity-Table
        </p>
        <img src={simpleEx} />
      </div>
    </>
  );
};

export default Install;