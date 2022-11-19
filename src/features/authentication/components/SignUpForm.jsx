import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from './FormButton';
import LoginFormInput from './LoginFormInput';

const SignUpForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/personal-info');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="text-base text-[#292929] my-5">
        <LoginFormInput
          label="Organization Name"
          name="organization name"
          type="text"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="Organization name"
        />
        <LoginFormInput
          label="CAC Registration Number"
          name="CAC Registration Number"
          type="text"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="CAC registration number"
        />
        <LoginFormInput
          label="Organization Email"
          name="Organization Email"
          type="email"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="organization email"
        />
        <LoginFormInput
          label="Organization Address"
          name="organization address"
          type="text"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="organization address"
        />
        <LoginFormInput
          label="Organization Phone Number"
          name="Organization Phone Number"
          type="number"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="organization phone number"
        />
        <LoginFormInput
          label="Organization Website"
          name="Organization Website"
          type="url"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="organization website"
        />
        <FormButton name="Proceed" />
      </form>
    </div>
  );
};

export default SignUpForm;
