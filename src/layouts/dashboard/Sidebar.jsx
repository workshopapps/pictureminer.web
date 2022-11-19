import React from 'react';
import logo from '../../assets/Minegram.svg';
import { NavLink } from 'react-router-dom';
import { Element3, Gallery, Triangle } from 'iconsax-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'sidebar__links--active sidebar__links'
              : 'sidebar__links '
          }
          to={'/dashboard'}
        >
          <Element3 size="16" color="#1d1d1d" />
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'sidebar__links--active sidebar__links'
              : 'sidebar__links'
          }
          to={'/images'}
        >
          <Gallery size="16" color="#1d1d1d" />
          Images
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'sidebar__links--active sidebar__links'
              : 'sidebar__links'
          }
          to={'/billing'}
        >
          <Triangle size="16" color="#1d1d1d" />
          Billing
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
