import React, { useState, useEffect } from 'react';
import { DocumentUpload } from 'iconsax-react';
import { images } from '../../Constants';
import useUploadImage from '../../hooks/useUploadImage';
import './styles/imageUpload.scss';

const ImageUpload = () => {
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
          {response && <p>Reload: {response.data.text_content}</p>}
          {console.log(response)}
        </div>
        <button onClick={handleImageSubmit}>upload</button>
        {response && <p>{response.data.text_content}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
