import React from 'react';

import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="back_button" onClick={() => navigate(-1)}>
      {'<'}
    </div>
  );
};

export default BackButton;
