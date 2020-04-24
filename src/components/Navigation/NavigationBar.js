import React from 'react';
import { IconButton } from '@material-ui/core';
import { Tooltip } from 'antd';
import LoggedOutNavItem from './LoggedOutNavItem';
import LoggedInNavItem from './LoggedInNavItem';

const NavigationBar = ({
  toggleSideNav,
  toggleSearchInput,
  searchInputOpen,
}) => {
  const auth =
    localStorage.authToken && localStorage.authToken !== '' ? true : false;
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top navigation-bar ${
        !searchInputOpen ? '' : 'inactive'
      }`}
    >
      {!searchInputOpen && (
        <>
          <IconButton onClick={toggleSideNav}>
            <i className='material-icons'>menu</i>
          </IconButton>
          <a className='navbar-brand ml-3' href='/'>
            TMDbCine
          </a>
          <ul className='navbar-nav ml-auto'>
            {auth ? <LoggedInNavItem /> : <LoggedOutNavItem />}
            <Tooltip placement='bottom' title='Search'>
              <li className='nav-item' onClick={toggleSearchInput}>
                <IconButton>
                  <i className='material-icons'>search</i>
                </IconButton>
              </li>
            </Tooltip>
          </ul>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
