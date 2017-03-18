import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HOME,
  HELLO,
  HELLO_ASYNC
} from '../routes';

export default () =>
  <nav>
    <ul>
      {[
        { route: HOME, label: 'Home' },
        { route: HELLO, label: 'Say Hello' },
        { route: HELLO_ASYNC, label: 'Say Hello Asynchronously' },
        { route: '/404', label: '404 Demo' }
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>;
