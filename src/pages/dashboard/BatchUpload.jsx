import React, { useState } from 'react';
import AuthInput from '../../components/form/AuthInput';
import TryDemo from '../../components/ui/TryDemo';
import Modal from '../../components/ui/Modal';
import SuccessIcon from '../../assets/SuccessIcon';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import useUploadBatch from '../../Hooks/useUploadBatch';
import { notifyError } from '../../utils/notify';

const Loader = () => {
  return <div className="loader2"></div>;
};
const ModalContent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <SuccessIcon />
      <div>
        Your file has been uplaaded succesfully. Please check the Batch page for
        the progress state
      </div>
      <Button text="OK" onClick={() => navigate('/images')} />
    </div>
  );
};
const BatchUpload = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [Tag, setTag] = useState([]);
  const [description, setDescription] = useState(null);
  const [errorMessage, seterrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { mutateAsync: uploadBatch, isLoading } = useUploadBatch();
  const trnasformTags = (tags) => {
    return tags.split(',');
  };

  const handleOnChangeUpload = async (e) => {
    const formData = new FormData();
    formData.append('csv', e.target.files[0]);
    formData.append('name', name);
    formData.append('tags', Tag);
    formData.append('description', description);

    try {
      await uploadBatch(formData);
      setShowModal(true);
    } catch (error) {
      if (error.response.data.message === 'unable to verify token') {
        navigate('/login');
      }
      notifyError(error.response.data.message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto max-w-screen-xl my-10">
      {showModal ? (
        <div>
          <Modal>
            {' '}
            <ModalContent />
          </Modal>{' '}
        </div>
      ) : (
        <>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <h4 className="my-5 font-bold">Image Details: </h4>

          <form
            className="flex gap-9 flex-col lg:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex gap-8 flex-col md:flex-1">
              <AuthInput
                placeholder="Building"
                label="Name of Batch"
                labelClassName="text-dark font-normal text-base"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <AuthInput
                placeholder="A list of different rooms in an apartment"
                label="Description"
                labelClassName="text-dark font-normal text-base"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <AuthInput
                placeholder="Bathroom, Bedroom, Kitchen"
                labelClassName="text-dark font-normal text-base"
                label="Tag"
                name="tag"
                onChange={(e) => setTag(trnasformTags(e.target.value))}
              />
            </div>
            <button type="submit" className="md:flex-1">
              <TryDemo
                onImageChange={handleOnChangeUpload}
                text=""
                file="csv"
                disable={!(name && Tag && description)}
              />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default BatchUpload;
