import React from 'react';
import { useField } from 'formik';
import './Login.scss';
const FormInput = ({ type = 'text', placeholder, name, id, label }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.error && meta.touched;

  return (
    <>
      <label className="inputlabel" htmlFor="name">
        {' '}
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={(e) => helpers.setValue(e.target.value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        className={showError ? 'errorinput' : 'logininput'}
      />
      {showError && <div className="errortext">{meta.error}</div>}
    </>
  );
};

export default FormInput;
