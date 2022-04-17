import React from 'react';

const Dashboard = () => {
  return (
    <h1>Get Started</h1>
  );
};

const Install = () => {
  return (
    <h1>Install</h1>
  );
};

const Information = () => {
  return (
    <h1>All Props</h1>
  );
};

const Features = () => {
    return(
        <h1>
            Features
        </h1>

    )
}

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
    label: 'Home'
  },
  {
    path: '/Install',
    Component: Install,
    label: 'Installation'
  },
  // {
  //   path: '/Information',
  //   Component: Information,
  //   label: 'All Props',
  // },
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