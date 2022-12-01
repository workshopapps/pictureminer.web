import { Filter } from 'iconsax-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { removeItemFromLocalStorage } from '../../localStorage';
import { RiSearchLine } from 'react-icons/ri';

const DashboardNavbar = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser(null);
    removeItemFromLocalStorage('user');
  };

  return (
    <div className="navbar">
      <div className="form__input">
        <RiSearchLine />
        <input type="search" name="" id="" placeholder="Search" />
      </div>
      <div className="filt">
        <Filter size={'40'} color="#ff6c00" />
      </div>
      <div className="user">
        <div className="user__grid">
          <div className="user_image">{data ? data.Username[0] : null}</div>
          <p className="user_name">{data ? data.Username : null}</p>
        </div>
        <div
          className="drop__down"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7797 0.966797L7.43306 5.31346C6.91973 5.8268 6.07973 5.8268 5.56639 5.31346L1.21973 0.966797"
              stroke="#1D1D1D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={showMenu ? 'show account' : 'hide account'}>
            <Link to="account-setup">
              <p>Account Settings</p>
            </Link>

            <p onClick={handleLogout}>Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
