// src/components/NavbarLinks.js

import React from 'react';
import { Link } from 'react-router-dom';

const getLinksForUserType = (userType) => {
  switch (userType) {
    case 'student':
      return [
        { path: '/activity-done', label: 'Activity Done' },
        { path: '/activity-review', label: 'Activity Review' },
        { path: '/activity-status', label: 'Activity Status' },
        { path: '/activity-vote', label: 'Activity Vote' },
      ];
    case 'accompagnateur':
      return [
        { path: '/activity-review', label: 'Activity Review' },
        { path: '/activity-propositions', label: 'Activity Propositions' },
        { path: '/activity-list', label: 'Activity List' },
        { path: '/accompanying-presence', label: 'Accompanying Presence' },
      ];
    case 'responsable':
      return [
        { path: '/activity-review', label: 'Activity Review' },
        { path: '/activity-propositions', label: 'Activity Propositions' },
        { path: '/activity-list', label: 'Activity List' },
        { path: '/accompanying-presence', label: 'Accompanying Presence' },
      ];
    default:
      return [];
  }
};

const NavbarLinks = ({ userType }) => {
  const links = getLinksForUserType(userType);

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLinks;
