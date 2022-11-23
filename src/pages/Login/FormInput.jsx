import React from 'react';
import { useField } from 'formik';
import './Login.scss';
const FormInput = ({ type = 'text', placeholder, name, id }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
    <input type={type} placeholder = {placeholder} name = {name} id = {id}
    onChange = {e => helpers.setValue(e.target.value)}
    onBlur = {() => helpers.setTouched(true)}
    value = {field.value}
    className = {showError ? 'error' : 'logininput'}
    />
    {showError && <div className = 'error'>{meta.error}</div>}
    </>
  );
};

export default FormInput;