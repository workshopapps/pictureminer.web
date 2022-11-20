import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import {
  Element3,
  Gallery,
  TextalignJustifycenter,
  Triangle,
} from 'iconsax-react';

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div className="menu__sidebar" onClick={() => setOpenSidebar(true)}>
        <TextalignJustifycenter size="24" color="#292D32" />
      </div>
      <div
        className="overlay"
        onClick={() => setOpenSidebar(false)}
        data-visible={openSidebar}
      ></div>

      <aside className="sidebar" data-visible={openSidebar}>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Link>

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
    </>
  );
};

export default Sidebar;
