import React from 'react';
import { Tooltip } from 'antd';
import { IconButton } from '@material-ui/core';
import { navs } from './NavData';
import { withRouter } from 'react-router-dom';

const LoggedOutNavItem = ({ location }) =>
  navs
    .filter((filteredNav) => filteredNav.type !== 'loggedIn')
    .map((nav, index) => (
      <Tooltip key={index} placement='bottom' title={nav.title}>
        <li className='nav-item'>
          <a
            href={nav.path}
            className={nav.path === location.pathname ? 'active' : ''}
          >
            <IconButton>
              <i className='material-icons'>{nav.matIcon}</i>
            </IconButton>
          </a>
        </li>
      </Tooltip>
    ));

export default withRouter(LoggedOutNavItem);
