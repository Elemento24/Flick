import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => (
  <li className='sidebar__menu-item'>
    <NavLink
      to={props.link}
      exact
      className='sidebar__menu-link'
    >
        {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;