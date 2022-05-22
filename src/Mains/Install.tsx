import React from 'react';
import Typography from '@mui/material/Typography';
import theme from 'prism-react-renderer/themes/nightOwl';
import { ReactUtilityTable } from 'react-utility-table';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import Layout from '../Components/Layout';


const Install = (props: any) => {
  debugger
  // const simpleEx = require('../Images/SimpleExample.PNG');
  const scope = { ReactUtilityTable };
  const code =
  `function demo() {
    const [tableData, setTableData] = React.useState([{"first_name": "Dmitri", "last_name": "Pickburn", "email": "dpickburn0@google.fr"},
    {"first_name": "Darelle", "last_name": "Whitlow", "email": "dwhitlow1@tumblr.com"}]);
    return (
      <div>
        <ReactUtilityTable
          data={tableData} 
          columns={[{ title: "Name", field: "first_name", filtering: false },
            {title: "Last Name", field: "last_name"},
            { title: "Email", field: "email"}]} 
          options={{
            filtering:true,
            exportButton: true
          }} />
      </div>
    );
  }`
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

        <LiveProvider code={code}
        scope={scope}
        theme={theme}
      >
        <Layout code={
          <LiveEditor />
        }
          ui={
            <LivePreview />
          }
        />
        <LiveError />
      </LiveProvider>
        {/* <img src={simpleEx} /> */}
      </div>
    </>
  );
};

export default Install;