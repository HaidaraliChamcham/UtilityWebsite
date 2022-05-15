import React from 'react';
import Dashboard from '../Mains/Dashboard';
import Install from '../Mains/Install';
import Features from '../Mains/Features'


const Support = () => {
    return(
        <h1>
            Support
        </h1>

    )
}


const RouteElement = [
  {
    path: '/',
    Component: Dashboard,
    label: 'Dashboard'
  },
  {
    path: '/Install',
    Component: Install,
    label: 'Installation'
  },
  {
    path: '/Features',
    Component: Features,
    label: 'Key Features',
  },
  // {
  //   path: '/Support',
  //   Component: Support,
  //   label: 'Support',
  // },
];

export default RouteElement;