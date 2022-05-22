

import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { ReactUtilityTable } from 'react-utility-table';
import Layout from '../Components/Layout';
import theme from 'prism-react-renderer/themes/nightOwl'


export default function ExportExcel() {
  const scope = { ReactUtilityTable };
  
  return (
    <>

      <LiveProvider code={`

      // Please uncomment the commented lines of code after install  react-utility-table to access full features
      
         function demo() {
          const [tableData, setTableData] = React.useState([
            { firstName: "Benazir", surname: "Chamcham" },
            { firstName: "Haidarali", surname: "Chamcham" }
          ]);
          return (
            <div>
              <ReactUtilityTable
              title="Excel Download"
                data={tableData} 
                columns={[
                  { title: "Name", field: "firstName" }
                ]}
                options={{
                    exportButton:true ,
                    // exportFileName:"example"   default title is set            
                }}
                
           
              />
            </div>
          );
        }
        `}
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


    </>
  )
}
