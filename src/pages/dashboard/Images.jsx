import { ArrowDown2, Trash } from 'iconsax-react';
import React, { useContext, useEffect, useState, useRef } from 'react';
import Button from '../../components/ui/Button';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Modal, { Backdrop } from '../../components/ui/Modal';
import successIcon from '../../assets/dashboardImageDetails/success-icon.webp';
import warningIcon from '../../assets/dashboardImageDetails/warning-icon.webp';
import closeIcon from '../../assets/dashboardImageDetails/close-icon.webp';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import computer from '../../assets/computer.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BatchImage from './BatchImage';
import { notifyError } from '../../utils/notify';

const NoImageComponent = () => {
  return (
    <div className="no__image">
      <p>0 Image mined (no data to show yet)</p>
      <div className="image_wrapper">
        <Link to={'/imageUpload'}>
          <img src={computer} alt="no image" />
        </Link>
      </div>
    </div>
  );
};

const Images = () => {
  const { user } = useContext(UserContext);
  const [imageData, setImageData] = useState({ loading: false });
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);
  const [singleImageKey, setSingleImageKey] = useState('');


  const toggleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const toggleDeleteSuccessModal = (imageData) => {
    showDeleteModal && toggleDeleteModal();
    setShowDeleteSuccessModal((prev) => !prev);
    console.log(imageData);
  };

  // const getImageKeys = (imageKeyArray) => {};
  // let newArray = [];
  // newArray.push(imageKeyArray);
  // console.log(imageKeyArray);
  // console.log(newArray);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const columns = [
    {
      name: 'S/No',
      selector: (row) => row.sn,
      sortable: true,
      maxWidth: '100px',
      minWidth: '100px',
    },
    // {
    //   name: `${(<input type="checkbox" />)}`,
    //   selector: (cell) => cell.checkbox,
    //   sortable: true,
    //   right: true,
    // },
    {
      name: 'PictureRow',
      selector: (row) => row.picture,
      sortable: true,
      maxWidth: '120px',
      minWidth: '120px',
    },
    {
      name: 'Picture ID',
      selector: (row) => row.pictureId,
      sortable: true,
      maxWidth: '240px',
      minWidth: '240px',
    },
    {
      name: 'Date Mined',
      selector: (row) => row.dateMined,
      sortable: true,
      maxWidth: '180px',
      minWidth: '180px',
    },
    {
      name: 'Details',
      selector: (cell) => cell.details,
      sortable: true,
      maxWidth: '150px',
      minWidth: '150px',
    },

    {
      name: '',
      selector: (cell) => cell.delete,
      right: true,
      sortable: true,
      width: '100px',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setImageData((prev) => {
          return {
            ...prev,
            loading: true,
          };
        });

        const response = await axios.get('mine-service/get-all', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.Token}`,
          },
        });

        if (response) {
          const structuredData = response?.data.map((item, index) => {
            return {
              id: index,
              sn: index,
              picture: <img src={item.image_path} alt="" />,
              pictureId: item.image_key,
              dateMined: `${item.date_created.split('T')[0]}`,
              details: (
                <Link to={item.image_key} className="view__more">
                  View More
                </Link>
              ),
              delete: (
                <div
                  className="delete"
                  onClick={() => {
                    toggleDeleteModal();
                    setSingleImageKey(item.image_key);
                    console.log(singleImageKey);
                  }}
                >
                  <Trash
                    size={24}
                    color="#f04438"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              ),
              // checkbox: (
              //   <div className="pl-0 ml-0">
              //     <input
              //       type="checkbox"
              //       id="delete_all"
              //       onClick={() => {
              //         setImageKeyArray([...imageKeyArray, item.image_key]);
              //         getImageKeys();
              //       }}
              //       // checked={isChecked}
              //       // onChange={handleCheckboxChange}
              //     />
              //   </div>
              // ),
            };
          });

          setImageData((prev) => {
            return {
              ...prev,
              loading: false,
              tabledata: structuredData,
            };
          });
        }
      } catch (error) {
        notifyError('Unable to mine image');
      } finally {
        setImageData((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
        /* empty */
      }
    };
    fetchData();
  }, [user, singleImageKey]);

  const handleDelete = async function () {
    try {
      await axios.delete(
        `https://discripto.hng.tech/api1/api/v1/mine-service/delete/${singleImageKey}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.Token}`,
          },
        }
      );
    } catch (err) {
      notifyError('Unable to delete your image');
    }

    setSingleImageKey('');

    // if (response.data.status === 'success') {
    //     const newTableData = imageData.tabledata.filter((item) => {
    //       return item.pictureId !== singleImageKey;
    //     });
    // }
  };

  return (
    <Tabs>
      <TabList className={'tablist'}>
        <Tab className={'tab'} selectedClassName={'active__tab'}>
          Images
        </Tab>
        <Tab className={'tab'} selectedClassName={'active__tab'}>
          Batch Images
        </Tab>
      </TabList>

      <TabPanel>
        <div className="dashboard_images">
          <div className="dashboard__images__head">
            <h1>Images</h1>
            {/* <div className="relative" ref={menuRef}>
              <Button
                text={'Filter'}
                icon={<ArrowDown2 size={24} color="#FF6C00" />}
                onclick={toggleShowMenu}
                className="button"
                type="secondary"
              />
              <div className={showMenu ? 'show filter' : 'hide filter'}>
                <p>Last two days </p>
                <p>Last 1 week</p>
                <p>Last 1 month</p>
                <p>Last 2 months</p>
              </div>
            </div> */}
          </div>
          <div className="images_table">
            <DataTable
              columns={columns}
              data={imageData.tabledata}
              progressPending={imageData.loading}
              responsive
              striped
              pagination
              noDataComponent={<NoImageComponent />}
              progressComponent={<div className="loader2"></div>}
            />
          </div>
          {showDeleteModal && (
            <>
              <Backdrop />
              <Modal>
                <div className="flex flex-col items-center justify-center gap-8 p-4">
                  <img className="" src={warningIcon} alt="warning icon" />

                  <h2 className="text-[1.7rem] font-[500]">Delete Image</h2>

                  <p className="text-[#797b89] text-center text-md">
                    Are you sure you want to delete this image? This action
                    cannot be undone.
                  </p>

                  <div className="flex gap-4 mt-4 w-full">
                    <Button
                      styles={{
                        border: '1px solid #8e8e8e',
                        color: '#8e8e8e',
                        padding: '1rem 2rem',
                        width: '100%',
                        borderRadius: '.5rem',
                        fontSize: '1.5rem',
                        fontWeight: '500',
                      }}
                      className="border border-[#8e8e8e] text-[#8e8e8e] py-4 px-8 w-full rounded-lg text-2xl font-medium hover:bg-[#FF6C00] hover:text-white"
                      text="Cancel"
                      onclick={toggleDeleteModal}
                    />

                    <Button
                      styles={{
                        background: '#f04438',
                        color: 'white',
                        padding: '1rem',
                        width: '100%',
                        borderRadius: '.5rem',
                        fontSize: '1.5rem',
                        fontWeight: '500',
                      }}
                      className="bg-[#f04438] text-white p-4 w-full rounded-lg text-2xl font-medium hover:bg-[#FF9D55]"
                      text="Delete"
                      onclick={() => {
                        toggleDeleteSuccessModal();
                        handleDelete();
                      }}
                    />
                  </div>
                </div>
              </Modal>
            </>
          )}

          {showDeleteSuccessModal && (
            <>
              <Backdrop />
              <Modal>
                <div className=" flex flex-col items-center justify-center gap-8 p-4">
                  <div className="flex w-full justify-end">
                    <div
                      className="w-14 cursor-pointer"
                      onClick={toggleDeleteSuccessModal}
                    >
                      <img
                        className="w-full"
                        src={closeIcon}
                        alt="close icon"
                      />
                    </div>
                  </div>

                  <img className="" src={successIcon} alt="success icon" />

                  <h2 className="text-[1.7rem] font-[500]">Successful</h2>

                  <p className="text-[#797b89] text-center text-md">
                    Image successfully deleted
                  </p>

                  <div className="flex gap-4 mt-4 w-full justify-center">
                    <Button
                      styles={{
                        background: '#ff6c00',
                        color: 'white',
                        padding: '1rem',
                        width: '15rem',
                        borderRadius: '.5rem',
                        fontSize: '1.5rem',
                        fontWeight: '500',
                      }}
                      className="bg-[#ff6c00] text-white p-4 w-60 rounded-lg text-2xl font-medium hover:bg-[#FF9D55]"
                      text="Done"
                      onclick={toggleDeleteSuccessModal}
                    />
                  </div>
                </div>
              </Modal>
            </>
          )}
        </div>
      </TabPanel>
      <TabPanel>
        <BatchImage />
      </TabPanel>
    </Tabs>
  );
};

export default Images;
