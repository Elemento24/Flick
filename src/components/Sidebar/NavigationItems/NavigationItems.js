import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => (
  <ul className='sidebar__menu-list'>
    <NavigationItem link='/'>Home</NavigationItem>
    <NavigationItem link='/search'>Search</NavigationItem>
    <NavigationItem link='/trending'>Trending</NavigationItem>
    <NavigationItem link='/wishlist'>Wishlist</NavigationItem>
  </ul>
);

export default NavigationItems;