import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => (
  <ul>
    <NavigationItem link='/'>Home</NavigationItem>
    <NavigationItem link='/search'>Search</NavigationItem>
    <NavigationItem link='/trending'>Trending</NavigationItem>
    <NavigationItem link='/movie/613178'>Show Page</NavigationItem>
  </ul>
);

export default NavigationItems;