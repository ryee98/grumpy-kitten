import React from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';  

export const MainMenu = () => {

  // ui model data
  const menuItems = [

    { id: 1, url: '/voter_reg', caption: 'Voters' },
    { id: 2, url: '/voter_list', caption: 'Voter List' },
    { id: 3, url: '/election_mgmt', caption: 'Elections' },
    { id: 4, url: '/cast-vote', caption: 'Cast Vote'}
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