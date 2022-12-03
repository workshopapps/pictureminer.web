import React, { useState } from 'react';
import AuthInput from '../../components/form/AuthInput';
import TryDemo from '../../components/ui/TryDemo';
import Modal from '../../components/ui/Modal';
import SuccessIcon from '../../assets/SuccessIcon';
import Button from '../../components/Button';
import { useNavigate }  from 'react-router-dom';
import useUploadBatch from '../../Hooks/useUploadBatch';

const Loader = () => {
  return (
    <div className="loader2">
    </div>
  );
};
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
  // const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {  isLoading } = useUploadBatch();
  const handleOnChangeUpload = (e) => {
    // setFile(e.target.files[0]);
    // const formData = new FormData();
    // formData.append('file', e.target.files[0]);
    // try {
    //   uploadBatch(formData);

    // } catch (error) {
    //   console.log(error);

    // }



    setShowModal(true);


  };

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className='mb-4'>
      {
        showModal ? ( <div><Modal> <ModalContent/></Modal> </div>) : (<>
          <h4 className='my-5 font-bold'>Image Details: </h4>
          <div className='flex gap-9 flex-col lg:flex-row' >



            <div className='flex gap-8 flex-col md:flex-1'>


              <AuthInput
                placeholder='Building'
                label='Name of Batch'
                labelClassName='text-dark font-normal text-base'
              />
              <AuthInput
                placeholder='A list of different rooms in an apartment'
                label='Description'
                labelClassName='text-dark font-normal text-base'

              />
              <AuthInput
                placeholder='Bathroom, Bedroom, Kitchen'
                labelClassName='text-dark font-normal text-base'

                label='Tag'

              />
            </div>
            <div className='md:flex-1'>
              <TryDemo onImageChange={handleOnChangeUpload} text = '' />
            </div>



          </div>
        </>)
      }

    </div>
  );
};

export default BatchUpload;