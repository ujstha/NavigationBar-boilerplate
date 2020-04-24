import React from 'react';
import { withRouter } from 'react-router-dom';
import { Switch } from 'antd';
import { IconButton } from '@material-ui/core';
import { navs } from './NavData';

const SideNavigationBar = ({
  collapsed,
  setWrapperRef,
  handleThemeChange,
  location,
}) => {
  const dark_theme = localStorage.dark_theme === 'true' ? true : false;
  const auth =
    localStorage.authToken && localStorage.authToken !== '' ? true : false;
  return (
    <div
      className={`side-navigation ${collapsed ? '' : 'collapsed'}`}
      ref={setWrapperRef}
    >
      {collapsed && (
        <ul>
          <li className='side-navigation-close-btn'>
            <IconButton>
              <i className='material-icons'>close</i>
            </IconButton>
          </li>
          <hr />
          {navs
            .filter((filteredNav) =>
              auth
                ? filteredNav.type !== 'loggedOut'
                : filteredNav.type !== 'loggedIn'
            )
            .map((nav, index) => {
              return (
                <li key={index}>
                  <a
                    href={nav.path}
                    className={nav.path === location.pathname ? 'active' : ''}
                  >
                    <IconButton disabled>
                      <i className='material-icons'>{nav.matIcon}</i>
                    </IconButton>
                    <span className='side-navigation-title'>{nav.title}</span>
                  </a>
                </li>
              );
            })}
          <li>
            <span>
              <IconButton>
                <i className='material-icons'>nights_stay</i>
              </IconButton>
              <span className='side-navigation-title'>
                Dark Theme: {dark_theme ? 'On' : 'Off'}
              </span>
              &ensp;
              <Switch
                defaultChecked={dark_theme}
                onChange={handleThemeChange}
              />
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default withRouter(SideNavigationBar);
