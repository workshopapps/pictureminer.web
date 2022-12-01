import React, { useState, useEffect } from 'react';
import { DocumentUpload } from 'iconsax-react';
import { images } from '../../Constants';
// import { Link } from 'react-router-dom';
import useUploadImage from '../../Hooks/useUploadImage';
import './styles/imageUpload.scss';

const ImageUpload = ({ demo = false }) => {
  const { mutate, response, isLoading } = useUploadImage();

  const [imagesUpload, setImagesUpload] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

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
    console.log('clicked');
    const formData = new FormData();
    imagesUpload.forEach((image) => formData.append('image', image));
    mutate(formData);
    console.log(imagesUpload);
  };
  if (demo) {
    return (
      <form className="mx-auto my-14">
        <div
          className=" w-full max-w-[500px] flex flex-col space-around gap-8 rounded-[8px] items-center mx-auto py-6 relative"
          style={{
            border: '0.81658px dashed #803600',
          }}
        >
          <h2 className="text-[#FF6C00] text-[24px]">Try demo</h2>
          <div className="w-[54px] w-[54px]">
            <img
              src={images.addToFolder}
              className="w-full h-full"
              alt="Add to folder"
            />
          </div>
          <p className="text-[14px] text-[#b4b4b4] leading-[20px] text-center">
            Drop or drag image here or click to upload
          </p>
          <div className="w-[80%]">
            <label
              htmlFor="uploaddd"
              className="bg-[#FF6C00] text-white flex flex-row justify-center items-center h-[48px] rounded-[8px] cursor-pointer"
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
            {response && <p>Result: {response.data.text_content}</p>}
            {console.log(response)}
          </div>
        </div>
      </form>
    );
  }
  return (
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
              <img key={imagesUpload.length} src={imageSrc} className="w-24" />
            ))}
          </div>
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
          {response && <p>Result: {response.data.text_content}</p>}
          {console.log(response)}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
