import { ArrowDown2 } from 'iconsax-react';
import React from 'react';
import Button from '../../components/ui/Button';

const Images = () => {
  return (
    <div className="dasboard_images">
      <div className="dashboard__images__head">
        <h1>Images</h1>
        <Button
          text={'Filter'}
          icon={<ArrowDown2 size={24} color="#FF6C00" />}
        />
      </div>
      <div className="images_table"></div>
    </div>
  );
};

export default Images;
