import React from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';  

export const MainMenu = () => {

  // ui model data
  const menuItems = [
    { id: 1, url: '/voter_reg', caption: 'Voters' },
    { id: 2, url: '/election_mgmt', caption: 'Elections' },
    { id: 3, url: '/voting', caption: 'Cast a Vote'}
  ];

  return (
    <nav id="main-menu">
      <ul>
        {menuItems.map(menuItem => <li key={menuItem.id}>
          <Link to={menuItem.url}>{menuItem.caption}</Link>
        </li>)}
      </ul>
    </nav>
  );

};