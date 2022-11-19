import React from 'react';

const RadioForm = ({ label, name }) => {
  return (
    <div className="radio_form">
      <label htmlFor="radioInput">{label}</label>
      <input type="checkbox" name={name} id="" />
    </div>
  );
};

export default RadioForm;
