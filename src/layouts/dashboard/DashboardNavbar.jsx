import { Filter } from 'iconsax-react';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { removeItemFromLocalStorage } from '../../localStorage';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setLocalStorage } from '../../localStorage';
import { RiCreativeCommonsSaLine, RiSearchLine } from 'react-icons/ri';

const DashboardNavbar = ({ data }) => {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLogout = () => {
    setUser(null);
    removeItemFromLocalStorage('user');
  };
  const location = useLocation();
  const handleChange = async (e) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);

      try {
        toast('Changing Profile Picture');
        const response = await axios({
          method: 'patch',
          url: 'https://discripto.hng.tech/api1/api/v1/update_user_picture',

          data: formData,
          headers: {
            accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user.Token}`,
          },
        });
        if (response?.data?.status === 'success') {
          setUser((prev) => {
            return { ...prev, ProfileUrl: response?.data?.data?.profile_url };
          });
          setLocalStorage('user', {
            ...user,
            ProfileUrl: response?.data?.data?.profile_url,
          });
        } else {
          toast('Encounter Error');
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div className="navbar">
      <div className="">
        {location.pathname === '/images' ? (
          <>
            <RiSearchLine className="icon__ri" color="#6B7280" size="1.2rem" />

            <div className="form__input">
              <input type="search" name="" id="" placeholder="Search" />
            </div>
            <div className="filt">
              <Filter size={'40'} color="#ff6c00" />
            </div>
          </>
        ) : null}
      </div>

      <div className="user">
        <div className="user__grid">
          <div>
            <img className="user_image mb-3" src={user.ProfileUrl} />
          </div>
          <p className="user_name">{data ? data.Username : null}</p>
        </div>
        <div className="drop__down">
          <div className="svg">
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
            <div className={'hide account'}>
              <label className="relative">
                <p>Set profile picture</p>
                <input
                  className="absolute inset-0 w-full h-full opacity-0"
                  type="file"
                  accept="image/*, .png, .svg, .jpg"
                  onChange={handleChange}
                />
              </label>
              <Link to="account-setup">
                <p>Account Settings</p>
              </Link>
              <p onClick={handleLogout}>Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
