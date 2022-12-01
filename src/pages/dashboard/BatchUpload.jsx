import React from 'react';
import AuthInput from '../../components/form/AuthInput';
const BatchUpload = () => {
  return (
    <div>
      <h4>Image Details</h4>

      <div className='flex gap-3'>


        <AuthInput
          placeholder='Building'
          label='Name of Batch'

        />
        <AuthInput
          placeholder='A list of different rooms in an apartment'
          label='Description'

        />
        <AuthInput
          placeholder='Tag'
          label='Bathroom, Bedroom, Kitchen'

        />
      </div>
    </div>
  );
};

export default BatchUpload;