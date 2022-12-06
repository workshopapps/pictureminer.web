import React, { useState, useEffect } from 'react';
import { DocumentUpload } from 'iconsax-react';
import { images } from '../../Constants';
import BatchUpload from './BatchUpload';
// import { Link } from 'react-router-dom';
import useUploadImage from '../../Hooks/useUploadImage';
import './styles/imageUpload.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AuthInput from '../../components/form/AuthInput';
import { useGlobalContext } from '../../context/context';
import { mineImageWithUrlAction } from '../../context/actions';

const ImageUpload = ({ demo = false }) => {
  const { mutate, response, isLoading } = useUploadImage();

  const [imagesUpload, setImagesUpload] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  // mine image with image url
  const [url, setUrl] = useState('');

  const {
    state: {
      mineImageWithUrl: { loading, success, serverResponse, error },
    },
    dispatch,
  } = useGlobalContext();

  const handleSubmitUrl = async (e) => {
    e.preventDefault();

    await mineImageWithUrlAction({ url })(dispatch);
  };

  useEffect(() => {
    if (response) {
      console.log({ response });
    }
  }, [response]);

  // useEffect(() => {
  //   if (error) {
  //     console.log({ serverResponseError: error });
  //   }
  // }, [error]);

  useEffect(() => {
    if (images.length < 1 || images.length > 3) return;
    const newImageUrls = [];
    imagesUpload.forEach((image) =>
      newImageUrls.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageUrls);
  }, [imagesUpload]);

  const onImageChange = (e) => {
    setImagesUpload([...e.target.files]);
  };
  const handleImageSubmit = () => {
    // console.log('clicked');
    const formData = new FormData();
    imagesUpload.forEach((image) => formData.append('image', image));
    mutate(formData);
    // console.log(imagesUpload);
  };
  if (demo) {
    return (
      <div className="flex flex-col ga-8 items-center my-10">
        <div className="container__try-demo flex flex-col gap-8 rounded-lg items-center py-6 mx-6 md:mx-0 relative b-red border border-dashed border-secBrown justify-center">
          <h2 className="text-mainOrange text-large">Try demo</h2>
          <img
            src={images.addToFolder}
            className="h-16 w-16"
            alt="Add to folder"
          />
          {/* <div className="w-[54px] "></div> */}
          <p className="text-[14px] text-[#b4b4b4] leading-[20px] text-center">
            Drop or drag image here or click to upload
          </p>
          <div className="w-[80%]">
            <label
              htmlFor="uploaddd"
              className="bg-mainOrange text-white flex flex-row justify-center items-center h-[48px] rounded-[8px] cursor-pointer"
            >
              <DocumentUpload size="24" color="white" variant="Outline" />
              <p className="px-2">Upload image</p>
            </label>
            <input
              className="hidden"
              type="file"
              multiple
              accept="image/*, .png, .svg, .jpg"
              onChange={onImageChange}
              id="uploaddd"
            />
          </div>

          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex flex-row gap-5 items-center justify-center">
              {imageURLs.map((imageSrc) => (
                <img
                  key={imagesUpload.length}
                  src={imageSrc}
                  className="w-24"
                />
              ))}
            </div>
            {response?.error ? (
              <p className="text-red-400 text-lg">{response?.error?.message}</p>
            ) : null}
            {imageURLs.length > 0 && (
              <button
                className="button"
                onClick={handleImageSubmit}
                disabled={imagesUpload.length < 1 || imagesUpload.length > 3}
              >
                Mine Text
              </button>
            )}

            <div>{isLoading && <p className="loading">Fetching.....</p>}</div>
            {response?.data && (
              <p>
                Result: {response?.data ? response?.data?.text_content : null}
              </p>
            )}
            {/* {console.log(response)} */}
          </div>
        </div>
      </div>
    );
  }
  return (
    <Tabs>
      <TabList className={'tablist'}>
        <Tab className={'tab'} selectedClassName={'active__tab'}>
          Single Upload
        </Tab>
        <Tab className={'tab'} selectedClassName={'active__tab'}>
          Batch Upload
        </Tab>
      </TabList>

      <TabPanel>
        <div className="mx-auto">
          <div className="hero_upload">
            <img
              src={images.addToFolder}
              className="addToFolder"
              alt="Add to folder"
            />
            <p className="hero_upload_text">
              Drop or drag image here or click to upload
            </p>
            <div className="hero_upload_file">
              <div className="upload_icon flex flex-row justify-center items-center">
                <DocumentUpload size="32" color="#FF6c00" variant="Outline" />
                <p>Upload Image</p>
              </div>
              <input
                className="input_file cursor-pointer"
                id="upload"
                type="file"
                multiple
                accept="image/*, .png, .svg, .jpg"
                onChange={onImageChange}
              />
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
              <div className="flex flex-row gap-5 items-center justify-center">
                {imageURLs.map((imageSrc) => (
                  <img
                    key={imagesUpload.length}
                    src={imageSrc}
                    className="w-24"
                  />
                ))}
              </div>
              {response?.error ? (
                <p className="text-red-400 text-lg">
                  {response?.error?.message}
                </p>
              ) : null}
              {imageURLs.length > 0 && (
                <button
                  className="button"
                  onClick={handleImageSubmit}
                  disabled={imagesUpload.length < 1 || imagesUpload.length > 3}
                >
                  Mine Text
                </button>
              )}

              <div>{isLoading && <p className="loading">Fetching.....</p>}</div>
              {response?.data && <p>Result: {response?.data?.text_content}</p>}
              {/* {console.log(response)} */}
            </div>
          </div>

          <div className="text-2xl opacity-80 text-center my-8">OR</div>
          <div className="container__try-demo mx-auto my-16">
            {error ? (
              <p className="text-red-400 text-lg">{error && error}</p>
            ) : null}
            <form onSubmit={handleSubmitUrl}>
              <AuthInput
                label="Mine image with url"
                placeholder="Enter image url e.g https://via.placeholder.com/300.png"
                type="url"
                onChange={(e) => {
                  setUrl(e.target.value.trim());
                }}
              />
              {url ? (
                <div className="w-full h-full max-w-[400px] max-h-[400px] my-4 mx-auto">
                  <img
                    src={url}
                    alt=""
                    className="w-full h-full"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ) : null}

              {success ? (
                <div className="my-8">
                  <p className="text-lg" style={{ color: 'green' }}>
                    Mining was successful
                  </p>
                  <p className="text-xl">
                    Mining response: {serverResponse?.data?.text_content}
                  </p>
                </div>
              ) : null}

              <button
                type="submit"
                className="bg-[#FF6C00] hover:bg-[#FF9D55] w-full max-w-[300px] text-white flex justify-center items-center rounded-[8px] mt-4 h-[50px] mb-3 mx-auto"
                disabled={loading ? true : false}
              >
                {loading && loading ? 'Loading......' : 'Mine Image'}
              </button>
            </form>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <BatchUpload />
      </TabPanel>
    </Tabs>
  );
};

export default ImageUpload;
