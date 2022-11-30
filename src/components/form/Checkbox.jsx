import React from 'react';

const Checkbox = ({ label, name }) => {
  return (
    <div className="check_box">
      <input type="checkbox" name={name} id="" />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
