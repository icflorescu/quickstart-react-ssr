import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HOME,
  HELLO,
  HELLO_ASYNC
} from '../routes';

const links = [
  { route: HOME, label: 'Home' },
  { route: HELLO, label: 'Say Hello' },
  { route: HELLO_ASYNC, label: 'Say Hello Asynchronously' },
  { route: '/404', label: '404 Demo' }
];

const renderLink = link => (
  <li key={link.route}>
    <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
  </li>
);

export default () => (
  <nav>
    <ul>
      {links.map(renderLink)}
    </ul>
  </nav>
);
