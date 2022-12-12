import Button from '../../components/ui/Button';
import Modal, { Backdrop } from '../../components/ui/Modal';

import successIcon from '../../assets/dashboardImageDetails/success-icon.webp';
import warningIcon from '../../assets/dashboardImageDetails/warning-icon.webp';
import closeIcon from '../../assets/dashboardImageDetails/close-icon.webp';
import saveIcon from '../../assets/dashboardImageDetails/download-icon.webp';
import trashIcon from '../../assets/dashboardImageDetails/trash-icon.webp';

import { useContext, useEffect, useRef, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import UserContext from '../../context/UserContext';
import axios from 'axios';
import { notifyError, notifySuccess } from '../../utils/notify';

const ImageDetails = () => {
  const param = useParams();

  const [imageDets, setImageDets] = useState({ loading: false });
  const { user } = useContext(UserContext);
  const fetchReview = async () => {
    try {
      const response = await axios.get('feedback/all', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${user.Token}`,
        },
      });

      if (response) {
        const reviewStatus = response?.data.filter((item) => {
          return item.image_key === param.imageId;
        });
        setImageDets((prev) => {
          return { ...prev, reviewStatus: reviewStatus[0] };
        });
      }
    } catch (error) {
      if (error.response?.status === 400) {
        notifyError('Please try again, an error occured');
      } else if (error.response?.data.message) {
        notifyError(error.response.data.message);
      } else if (error.response?.status === 401) {
        notifyError('!Unauthorized, please log out and log in again');
      } else if (error.response?.status === 500) {
        notifyError(
          'We are currently experiencing server issues, please try again later'
        );
      } else if (error.response?.status === 404) {
        notifyError('Page not found');
      } else {
        notifyError('An error occured!!!');
      }
    } finally {
      /* empty */
    }
  };

  const handleDelete = async function () {
    try {
      const response = await axios.delete(
        `https://discripto.hng.tech/api1/api/v1/mine-service/delete/${param.imageId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.Token}`,
          },
        }
      );
      if (response) navigate(-1);
    } catch (err) {
      notifyError('Unable to delete your image');
    }
    // if (response.data.status === 'success') {
    //     const newTableData = imageData.tabledata.filter((item) => {
    //       return item.pictureId !== singleImageKey;
    //     });
    // }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setImageDets((prev) => {
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
          const deets = response?.data.filter((item) => {
            return item.image_key === param.imageId;
          });
          setImageDets((prev) => {
            return {
              ...prev,
              loading: false,
              details: deets,
            };
          });
        }
      } catch (error) {
        if (error.response?.status === 400) {
          notifyError('Please try again, an error occured');
        } else if (error.response?.data.message) {
          notifyError(error.response.data.message);
        } else if (error.response?.status === 401) {
          notifyError('!Unauthorized, please log out and log in again');
        } else if (error.response?.status === 500) {
          notifyError(
            'We are currently experiencing server issues, please try again later'
          );
        } else if (error.response?.status === 404) {
          notifyError('Page not found');
        } else {
          notifyError('An error occured!!!');
        }
      } finally {
        /* empty */
      }
    };
    fetchReview();
    fetchData();
  }, [user]);

  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);
  const [showSaveSuccessModal, setShowSaveSuccessModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const questionInputRef = useRef();

  const toggleDeleteModal = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const toggleDeleteSuccessModal = () => {
    showDeleteModal && toggleDeleteModal();
    setShowDeleteSuccessModal((prev) => !prev);
  };

  const toggleSaveSuccessModal = () => {
    setShowSaveSuccessModal((prev) => !prev);
  };

  const toggleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const saveToJsonHandler = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify({ ...imageDets })
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';

    link.click();
  };

  const [image, setImage] = useState({
    image_name: '',
    image_path: '',
  });
  const verifyHelp = async (verify) => {
    try {
      const response = await axios.post(
        'feedback',
        JSON.stringify({
          feedback: 'string',
          image_key: param.imageId,
          is_helpful: verify,
          reviewer_email: user.Email,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.Token}`,
          },
        }
      );

      if (response) {
        notifySuccess('Review Successfully submitted');

        fetchReview();
      }
    } catch (error) {
      if (error.response?.status === 400) {
        notifyError('Please try again, an error occured');
      } else if (error.response?.data.message) {
        notifyError(
          `${error.response?.data.message}, Please Log out and Log in again`
        );
      } else if (error.response?.status === 401) {
        notifyError('!Unauthorized, please log out and log in again');
      } else if (error.response?.status === 500) {
        notifyError(
          'We are currently experiencing server issues, please try again later'
        );
      } else if (error.response?.status === 404) {
        notifyError('Page not found');
      } else {
        notifyError('An error occured!!!');
      }
    }
  };

  return (
    <main className="">
      <section className="relative flex justify-between items-center">
        <div className="flex items-center gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="mb-1 cursor-pointer"
            onClick={() => {
              navigate('/images');
            }}
          >
            <path
              d="M15.0038 19.9201L8.48375 13.4001C7.71375 12.6301 7.71375 11.3701 8.48375 10.6001L15.0038 4.08008"
              stroke="#1D1D1D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h2 className="font-bold text-2xl">
            {`Picture ID: #${
              imageDets?.details
                ? imageDets?.details[0].date_created.split('.')[1]
                : 'None'
            }`}
          </h2>
        </div>

        <div className="hidden gap-4 md:flex">
          <Button
            className="bg-[#ff6c00] text-white p-4 w-40 rounded-lg font-medium hover:bg-[#FF9D55]"
            // styles={{
            //   background: '#ff6c00',
            //   color: 'white',
            //   padding: '1rem',
            //   width: '10rem',S
            //   borderRadius: '.5rem',
            //   fontSize: '.9rem',
            //   fontWeight: '500',
            // }}
            text="Save as Json"
            onclick={() => {
              toggleSaveSuccessModal();
              saveToJsonHandler();
            }}
          />
          <Button
            className="border border-[#ff6c00] text-[#ff6c00] py-4 px-8 w-40 rounded-lg font-medium	hover:bg-[#FF6C00] hover:text-white"
            // styles={{
            //   border: '1px solid #ff6c00',
            //   color: '#ff6c00',
            //   padding: '1rem 2rem',
            //   width: '10rem',
            //   borderRadius: '.5rem',
            //   fontSize: '.9rem',
            //   fontWeight: '500',
            // }}
            text="Delete"
            onclick={toggleDeleteModal}
          />
        </div>

        <div
          className="cursor-pointer md:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {showMenu && (
          <>
            <Backdrop onClick={toggleShowMenu} />
            <div className="absolute bg-white top-10 right-0 z-[100] p-2 w-[18rem]">
              <div
                onClick={() => {
                  toggleShowMenu();
                  toggleSaveSuccessModal();
                }}
                className="p-4 flex items-center gap-4 cursor-pointer justify-between"
              >
                <span className="">Save as Json</span>
                <img src={saveIcon} className="" alt="save icon" />
              </div>
              <div
                onClick={() => {
                  toggleShowMenu();
                  toggleDeleteModal();
                }}
                className="p-4 border-t text-[#f04438] cursor-pointer flex items-center justify-between gap-4"
              >
                <span className="">Delete</span>
                <img src={trashIcon} alt="delete icon" />
              </div>
            </div>
          </>
        )}
      </section>
      <section className="py-8">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              className="w-full"
              src={
                imageDets?.details
                  ? imageDets?.details[0].image_path
                  : 'https://images.unsplash.com/photo-1596120236172-231999844ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              }
              alt="Image descr"
            />
          </div>
          <div className="bg-[#f8f8f8] md:w-1/2 w rounded-md p-6 flex flex-col gap-8 text-md">
            <h3 className="font-[500] text-xl">Image description</h3>

            <p>
              {imageDets?.details
                ? imageDets?.details[0].text_content
                : 'This is an image of EKO hotel and suites, a popular 5 star hotel in victoria island, lagos, Nigeria.'}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-8 md:flex-row">
          <p>Was this article helpful</p>

          <div className="flex gap-4 ">
            {!imageDets?.reviewStatus ? (
              <>
                <div
                  className="rounded-full bg-[#ffe2cc] text-black flex items-center font-normal gap-2 py-2 px-4 cursor-pointer"
                  onClick={() => verifyHelp(true)}
                >
                  Yes
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.03014 4.99023H1.16183C0.817876 4.99023 0.539062 5.26905 0.539062 5.613V13.3976C0.539062 13.7416 0.817876 14.0204 1.16183 14.0204H3.03014C3.37409 14.0204 3.65291 13.7416 3.65291 13.3976V5.613C3.65291 5.26905 3.37409 4.99023 3.03014 4.99023Z" />
                    <path d="M11.0392 4.99108C10.5597 4.99108 10.2531 4.48007 10.4787 4.05693L11.6132 1.92977C12.002 1.20075 11.4737 0.320312 10.6475 0.320312C10.3573 0.320312 10.0789 0.435618 9.87367 0.640852L6.25304 4.26147C5.7859 4.72864 5.52344 5.36225 5.52344 6.02291V11.5302C5.52344 12.9059 6.63872 14.0212 8.01451 14.0212H13.1724C14.0226 14.0212 14.7656 13.4472 14.9802 12.6245L16.4306 7.06493C16.4661 6.92845 16.4842 6.78799 16.4842 6.64696C16.4842 5.73245 15.7428 4.99108 14.8283 4.99108H11.0392Z" />
                  </svg>
                </div>
                <div
                  className="rounded-full bg-[#ffe2cc] text-black flex items-center font-normal gap-2 py-2 px-4 cursor-pointer"
                  onClick={() => verifyHelp(false)}
                >
                  No
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4408 9.16797H14.2489C14.5817 9.16797 14.8516 8.89815 14.8516 8.56529V1.03181C14.8516 0.698949 14.5817 0.42913 14.2489 0.42913H12.4408C12.108 0.42913 11.8382 0.698949 11.8382 1.03181V8.56529C11.8382 8.89815 12.108 9.16797 12.4408 9.16797Z"
                      fill="black"
                    />
                    <path
                      d="M4.69342 9.16741C5.15748 9.16741 5.45421 9.66194 5.23583 10.0714L4.13793 12.13C3.76167 12.8355 4.2729 13.6875 5.07244 13.6875C5.35335 13.6875 5.62272 13.5759 5.82136 13.3773L9.32518 9.87348C9.77725 9.42138 10.0312 8.80821 10.0312 8.16886V2.83929C10.0312 1.50788 8.95194 0.428572 7.62054 0.428572H2.62903C1.80625 0.428572 1.08723 0.984092 0.879546 1.78023L-0.524002 7.16046C-0.558445 7.29254 -0.575892 7.42847 -0.575892 7.56495C-0.575892 8.44995 0.141566 9.16741 1.02657 9.16741H4.69342Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-full bg-[#ccc] text-[#333] flex items-center font-normal gap-2 py-2 px-4 pointer-events-none">
                  Yes
                  <svg
                    width={imageDets?.reviewStatus.is_helpful ? '24' : '15'}
                    height={imageDets?.reviewStatus.is_helpful ? '24' : '15'}
                    viewBox="0 0 17 15"
                    fill={
                      imageDets?.reviewStatus.is_helpful ? '#308c63' : '#333'
                    }
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.03014 4.99023H1.16183C0.817876 4.99023 0.539062 5.26905 0.539062 5.613V13.3976C0.539062 13.7416 0.817876 14.0204 1.16183 14.0204H3.03014C3.37409 14.0204 3.65291 13.7416 3.65291 13.3976V5.613C3.65291 5.26905 3.37409 4.99023 3.03014 4.99023Z" />
                    <path d="M11.0392 4.99108C10.5597 4.99108 10.2531 4.48007 10.4787 4.05693L11.6132 1.92977C12.002 1.20075 11.4737 0.320312 10.6475 0.320312C10.3573 0.320312 10.0789 0.435618 9.87367 0.640852L6.25304 4.26147C5.7859 4.72864 5.52344 5.36225 5.52344 6.02291V11.5302C5.52344 12.9059 6.63872 14.0212 8.01451 14.0212H13.1724C14.0226 14.0212 14.7656 13.4472 14.9802 12.6245L16.4306 7.06493C16.4661 6.92845 16.4842 6.78799 16.4842 6.64696C16.4842 5.73245 15.7428 4.99108 14.8283 4.99108H11.0392Z" />
                  </svg>
                </div>
                <div className="rounded-full bg-[#ccc] text-[#333] flex items-center font-normal gap-2 py-2 px-4 pointer-events-none ">
                  No{' '}
                  <svg
                    width={!imageDets?.reviewStatus.is_helpful ? '24' : '15'}
                    height={!imageDets?.reviewStatus.is_helpful ? '24' : '15'}
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4408 9.16797H14.2489C14.5817 9.16797 14.8516 8.89815 14.8516 8.56529V1.03181C14.8516 0.698949 14.5817 0.42913 14.2489 0.42913H12.4408C12.108 0.42913 11.8382 0.698949 11.8382 1.03181V8.56529C11.8382 8.89815 12.108 9.16797 12.4408 9.16797Z"
                      fill={
                        !imageDets?.reviewStatus.is_helpful ? 'red' : '#333'
                      }
                    />
                    <path
                      d="M4.69342 9.16741C5.15748 9.16741 5.45421 9.66194 5.23583 10.0714L4.13793 12.13C3.76167 12.8355 4.2729 13.6875 5.07244 13.6875C5.35335 13.6875 5.62272 13.5759 5.82136 13.3773L9.32518 9.87348C9.77725 9.42138 10.0312 8.80821 10.0312 8.16886V2.83929C10.0312 1.50788 8.95194 0.428572 7.62054 0.428572H2.62903C1.80625 0.428572 1.08723 0.984092 0.879546 1.78023L-0.524002 7.16046C-0.558445 7.29254 -0.575892 7.42847 -0.575892 7.56495C-0.575892 8.44995 0.141566 9.16741 1.02657 9.16741H4.69342Z"
                      fill={
                        !imageDets?.reviewStatus.is_helpful ? 'red' : '#333'
                      }
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {showDeleteModal && (
        <>
          <Backdrop />
          <Modal>
            <div className="flex flex-col items-center justify-center gap-8 p-4">
              <img className="" src={warningIcon} alt="warning icon" />

              <h2 className="text-xl font-[500]">Delete Image</h2>

              <p className="text-[#797b89] text-center text-md">
                Are you sure you want to delete this image? This action cannot
                be undone.
              </p>

              <div className="flex gap-4 mt-4 w-full">
                <Button
                  className="border border-[#8e8e8e] text-8e8e8e py-3 px-6 w-full rounded-lg	font-medium hover:bg-[#FF6C00] hover:text-white"
                  // styles={{,
                  //   padding: '.7rem 1.4rem',
                  //   width: '100%',
                  //   borderRadius: '.5rem',
                  //   fontSize: '.9rem',
                  //   fontWeight: '500',
                  // }}
                  text="Cancel"
                  onclick={toggleDeleteModal}
                />

                <Button
                  className="bg-[#f04438] text-white py-3 px-6 w-full rounded-lg	font-medium hover:bg-[#FF6C00]"
                  // styles={{
                  //   background: '#f04438',
                  //   color: 'white',
                  //   padding: '.7rem 1.4rem',
                  //   width: '100%',
                  //   borderRadius: '.5rem',
                  //   fontSize: '.9rem',
                  //   fontWeight: '500',
                  // }}
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
            <div className=" flex flex-col items-center justify-center gap-8 p-2">
              <div className="flex w-full justify-end">
                <div
                  className="w-10 cursor-pointer"
                  onClick={toggleDeleteSuccessModal}
                >
                  <img className="w-full" src={closeIcon} alt="close icon" />
                </div>
              </div>

              <img className="" src={successIcon} alt="success icon" />

              <h2 className="text-xl font-[500]">Successful</h2>

              <p className="text-[#797b89] text-center text-md">
                Image successfully deleted
              </p>

              <div className="flex gap-4 mt-4 w-full justify-center">
                <Button
                  className="bg-[#ff6c00] text-white py-3 px-6 w-60 rounded-lg font-medium hover:bg-[#FF9D55]"
                  // styles={{
                  //   background: '#ff6c00',
                  //   color: 'white',
                  //   padding: '.7rem 1.4rem',
                  //   width: '15rem',
                  //   borderRadius: '.5rem',
                  //   fontSize: '.9rem',
                  //   fontWeight: '500',
                  // }}
                  text="Done"
                  onclick={toggleDeleteSuccessModal}
                />
              </div>
            </div>
          </Modal>
        </>
      )}
      {showSaveSuccessModal && (
        <>
          <Backdrop />
          <Modal>
            <div className=" flex flex-col items-center justify-center gap-8 p-2">
              <div className="flex w-full justify-end">
                <div
                  className="w-10 cursor-pointer"
                  onClick={toggleSaveSuccessModal}
                >
                  <img className="w-full" src={closeIcon} alt="close icon" />
                </div>
              </div>

              <img className="" src={successIcon} alt="success icon" />

              <h2 className="text-xl font-[500]">Successful</h2>

              <p className="text-[#797b89] text-center text-md">
                Image successfully saved
              </p>

              <div className="flex gap-4 mt-4 w-full justify-center">
                <Button
                  className="bg-[#ff6c00] text-white py-3 px-6 w-60 rounded-lg font-medium hover:bg-[#FF9D55]"
                  // styles={{
                  //   background: '#ff6c00',
                  //   color: 'white',
                  //   padding: '.7rem 1.4rem',
                  //   width: '15rem',
                  //   borderRadius: '.5rem',
                  //   fontSize: '.9rem',
                  //   fontWeight: '500',
                  // }}
                  text="Done"
                  onclick={toggleSaveSuccessModal}
                />
              </div>
            </div>
          </Modal>
        </>
      )}
    </main>
  );
};

export default ImageDetails;
