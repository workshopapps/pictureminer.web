import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import {
  removeItemFromLocalStorage,
  setLocalStorage,
} from '../../localStorage';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SlCheck } from 'react-icons/sl';
import useGetBatch from '../../Hooks/useGetBatch';
import Modal, { Backdrop } from '../../components/ui/Modal';

const DashboardNavbar = ({ data }) => {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLogout = () => {
    setUser(null);
    removeItemFromLocalStorage('user');
  };
  const location = useLocation();
  const { response: countProcess } = useGetBatch(
    'https://discripto.hng.tech/api1/api/v1/batch-service/count-process',
    'count'
  );
  const [upgrade, setUpgrade] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

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
        toast('Encounter Error');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (

    <>
      <div className="navbar">
        <div className="relative ">
          {location.pathname === '/dashboard' ? (
            <>
              {countProcess && (
                <div className="flex flex-col md:flex-row justify-between gap-6 items-center w-full p-4 bg-white rounded-lg shadow mb-8 text-gray-800">
                  <div>Regular Account </div>
                  <div>
                    {Math.abs(countProcess.remaining_to_mine)}{' '}
                    <span>Free Mines left</span>
                  </div>
                  <div
                    className="cursor-pointer bg-mainOrange rounded-lg px-4 py-2 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-black"
                    onClick={() => setUpgrade((prevState) => !prevState)}
                  >
                    Upgrade Account
                  </div>
                </div>
              )}
            </>
          ) : null}
        </div>

        <div className="user">
          <div className="user__grid">
            <div>
              <img className="user_image mb-3" src={user.ProfileUrl} />

            </div>
          </div>
          <div className="drop__down">
            <p className="user_name">{data ? data.Username : null}</p>
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
            </div>
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
      {upgrade !== false ? (
        <>
          <Backdrop onClick={() => setUpgrade(false)} />
          <Modal
            style={{ maxWidth: '1000px', padding: 0, margin: 0 }}
            innerStyle={{
              background: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            <div className=" mx-auto max-w-screen-xl  ">
              <div className="lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-4 sm:grid xl:grid ">
                <div className="flex flex-col px-6  mx-auto max-w-2xl text-center  bg-[#FFE2CC] rounded-lg border border-gray-100 shadow py-4 gap-3 justify-between w-full">
                  <div className="flex justify-between items-baseline">
                    <h3 className=" text-large font-semibold">Standard</h3>
                    <div>
                      <span className="mr-2 text-normal font-extrabold">
                        {isChecked ? '$14' : '$148'}
                      </span>
                      {!isChecked && <p className="mt-1 line-through">$168</p>}
                    </div>
                  </div>
                  <div className="w-20 border-2 border-mainOrange border-solid"></div>
                  {/* List items  */}
                  <ul role="list" className=" space-y-2 text-left">
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>6 GB free storage space</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>25 image categorization </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>Image upload not more than 100MB</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg " />
                      <span>Faster processing speed</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg " />
                      <span>24/7 customer support </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg " />{' '}
                      <span>Access to CSV file upload</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg " />{' '}
                      <span>Access to detailed dashboard </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg " />{' '}
                      <span>Download of 10 categorized items</span>
                    </li>
                  </ul>
                  <Link
                    to={`/pricing/standard${isChecked}`}
                    className="w-[50%] md:w-[60%] text-white bg-mainOrange focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-3 text-center flex items-center space-x-4 hover:bg-white hover:text-[#FF6C00] "
                  >
                    {' '}
                    <span className="text-small"> Activate</span>
                  </Link>
                </div>
                <div className="flex flex-col px-6 mx-auto max-w-2xl text-center text-gray-900 bg-white rounded-lg border border-[#FFE2CC] py-4 gap-4">
                  <div className="flex justify-between items-baseline ">
                    <h3 className=" text-large font-semibold">Premium</h3>
                    <div>
                      <span className="mr-2 text-normal font-extrabold">
                        {isChecked ? '$25' : '$422'}
                      </span>
                      {!isChecked && <p className="mt-1 line-through">$480</p>}
                    </div>
                  </div>
                  <div className="w-20 border-2 border-mainOrange border-solid"></div>
                  {/* List items  */}
                  <ul role="list" className=" space-y-2 text-left">
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>Unlimited free storage space</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>200 image categorization </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>Image upload not more than 200MB</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg " />
                      <span>Faster processig speed</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg " />
                      <span>24/7 customer support </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>Access to CSV file upload</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>Download of 50 categorized items</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>Access to collaborating with your team</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <SlCheck className="text-lg" />
                      <span>
                        Downloads of categorized and procesessed CSV files
                      </span>
                    </li>
                  </ul>
                  <Link
                    to={`/pricing/premium${isChecked}`}
                    className="w-[50%] md:w-[60%] text-mainOrange bg-lightOrange focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-3 text-center flex items-center space-x-4 hover:bg-[#FF6C00] hover:text-white "
                  >
                    <span className="text-small "> Activate</span>
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default DashboardNavbar;
