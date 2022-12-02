import React, { useState } from 'react';
import AuthInput from '../../components/form/AuthInput';
import TryDemo from '../../components/ui/TryDemo';
import Modal from '../../components/ui/Modal';
import SuccessIcon from '../../assets/SuccessIcon';
import Button from '../../components/Button';
import { useNavigate }  from 'react-router-dom';


const ModalContent = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-4'>
      <SuccessIcon/>
      <div>
    Your file has been uplaaded succesfully. Please check the Batch page for the progress state
      </div>
      <Button text= 'OK' onClick={() => navigate('/images')} />

    </div>
  );
};
const BatchUpload = () => {
  const  [uploaded, setUploaded] = useState(false);
  const handleUpload = () => {
    setUploaded(true);
  };
  return (
    <div className='mb-4'>
      {
        uploaded ? ( <div><Modal> <ModalContent/></Modal> </div>) : (<>
          <h4 className='my-5 font-'>Image Details: </h4>
          <div className='flex gap-9 flex-col md:flex-row' >



            <div className='flex gap-3 flex-col md:flex-1'>


              <AuthInput
                placeholder='Building'
                label='Name of Batch'

              />
              <AuthInput
                placeholder='A list of different rooms in an apartment'
                label='Description'

              />
              <AuthInput
                placeholder='Bathroom, Bedroom, Kitchen'

                label='Tag'

              />
            </div>
            <div className='md:flex-1'>
              <TryDemo onImageChange={handleUpload}/>
            </div>



          </div>
        </>)
      }

    </div>
  );
};

export default BatchUpload;