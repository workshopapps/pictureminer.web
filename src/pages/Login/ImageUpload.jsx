import React from 'react';
import useUploadImage from '../../Hooks/useUploadImage';
export const ImageUpload = () => {
  const { mutate, response } = useUploadImage();
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    mutate(formData);
  };
  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {response && <img src={response.data.image_path} alt="uploaded" />}
    </div>
  );
};

