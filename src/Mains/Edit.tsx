import React, { useState } from "react";
import { ReactUtilityTable } from "react-utility-table";
import Layout from "../Components/Layout";



export default function Edit() {
    const [Code, setCode] = useState(`function Demo {
        const [data, setData] = React.useState([{
            {"first_name":"Fielding","last_name":"Widdecombe","gender":"Male"},
            {"first_name":"Coleman","last_name":"Rabjohn","gender":"Male"}
        }]);
        return (
            <ReactUtilityTable data={[]} columns={[]} />
        );
    }
      
      `)
    return (
        <Layout code={Code}

        ui={<ReactUtilityTable data={[]} columns={[]} />}
        />

    );
}
