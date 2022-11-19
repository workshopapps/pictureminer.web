import React, { useEffect } from 'react';
import ApplyPrimary from '../Buttons/ApplyPrimary';
import Close from '../Buttons/Close';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FormInputApply() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [role, setRole] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [messages, setMessages] = useState('');
  const [buttonBool, setButtonBool] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (
      firstName &&
      lastName &&
      workEmail &&
      companyWebsite &&
      role &&
      selectedProgram &&
      messages
    ) {
      setButtonBool(true);
      setCompleted(true);
    } else {
      setButtonBool(false);
      setCompleted(false);
    }
  }, [
    buttonBool,
    companyWebsite,
    firstName,
    lastName,
    messages,
    role,
    selectedProgram,
    workEmail,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-start m-auto py-[40px] px-[30px] w-[310px]  gap-[20px] bg-white border border-solid border-[#D2D2D2] rounded-lg mb-44 lg:w-[580px] "
    >
      <div className="first-row  flex flex-col lg:flex-row gap-[10px] ">
        <div className="flex flex-col gap-[5px] items-start">
          <label
            htmlFor="firstName"
            className=" font-sans font-light text-[16px] capitalize "
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="flex flex-row items-center p-[14px] gap-[5px] w-[250px] h-[44px] bg-white border border-solid border-[#B4B4B4] rounded-lg text-[14px] leading-[20px] text-[#B4B4B4] font-normal  "
          />
        </div>

        <div className="flex flex-col gap-[5px] items-start  ">
          <label
            htmlFor="lastName"
            className=" font-sans font-light text-[16px] capitalize "
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="flex flex-row items-center p-[14px] gap-[5px] w-[250px] h-[44px] bg-white border border-solid border-[#B4B4B4] rounded-lg text-[14px] leading-[20px] text-[#B4B4B4] font-normal "
          />
        </div>
      </div>

      <div className="second-row  flex flex-col lg:flex-row gap-[10px] ">
        <div className="flex flex-col gap-[5px] items-start  ">
          <label
            htmlFor="workEmail"
            className=" font-sans font-light text-[16px] capitalize"
          >
            Work Email
          </label>
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            name="workEmail"
            value={workEmail}
            onChange={(e) => {
              setWorkEmail(e.target.value);
            }}
            className="flex flex-row items-center p-[14px] gap-[5px] w-[250px] h-[44px] bg-white border border-solid border-[#B4B4B4] rounded-lg text-[14px] leading-[20px] text-[#B4B4B4] font-normal "
          />
        </div>

        <div className="flex flex-col gap-[5px] items-start  ">
          <label
            htmlFor="companyWebsite"
            className=" font-sans font-light text-[16px] capitalize "
          >
            Company website
          </label>
          <input
            type="text"
            placeholder="www.website.com"
            name="companyWebsite"
            value={companyWebsite}
            onChange={(e) => {
              setCompanyWebsite(e.target.value);
            }}
            className="flex flex-row items-center p-[14px] gap-[5px] w-[250px] h-[44px] bg-white border border-solid border-[#B4B4B4] rounded-lg text-[14px] leading-[20px] text-[#B4B4B4] font-normal "
          />
        </div>
      </div>
      <div className="third row flex flex-col lg:flex-row gap-[10px] ">
        <div className="flex flex-col gap-[5px] items-start  ">
          <label
            htmlFor="role"
            className=" font-sans font-light text-[16px] capitalize "
          >
            Role{' '}
          </label>
          <input
            type="text"
            placeholder="placeholder"
            name="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            className="flex flex-row items-center p-[14px] gap-[5px] w-[250px] h-[44px] bg-white border border-solid border-[#B4B4B4] rounded-lg text-[14px] leading-[20px] text-[#B4B4B4] font-normal "
          />
        </div>

        <div className="flex flex-col gap-[5px] items-start text-center ">
          <label
            htmlFor="role"
            className=" font-sans font-light text-[16px] capitalize "
          >
            Select Program{' '}
          </label>
          <FormControl>
            {!selectedProgram && (
              <InputLabel id="demo-simple-select-label">
                <span className=" font-sans  text-[14px] capitalize leading-[20px] text-[#B4B4B4] font-normal h-[20px] flex flex-row items-center pb-2 ">
                  {' '}
                  Select Program{' '}
                </span>
              </InputLabel>
            )}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="flex flex-row items-center p-[14px] gap-[5px] w-[250px] h-[44px] bg-white border border-solid border-[#B4B4B4] rounded-lg text-[14px] leading-[20px] text-[#B4B4B4] font-normal text-center "
              label="Select Program"
              value={selectedProgram}
              onChange={(e) => {
                setSelectedProgram(e.target.value);
              }}
            >
              <MenuItem
                value={'Referral Program'}
                className=" bg-[#ADB9C3] h-[44px] py-[13px] px-[14px] text-[#3C3C43] "
              >
                <span className=" h-[44px] py-[13px] px-[14px] text-[#3C3C43] text-[12px] leading-[18px]   ">
                  Referral Program
                </span>
              </MenuItem>
              <MenuItem value={'TechPartner Program'}>
                <span className="text-[#FF842B] h-[44px] py-[13px] px-[14px] text-[12px] leading-[18px]  ">
                  Tech Partner Program
                </span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-col gap-[5px] items-start  ">
        <label
          htmlFor="messages"
          className=" font-sans font-light text-[16px] capitalize "
        >
          Messages
        </label>
        <textarea
          name="messages"
          id="messages"
          cols="30"
          rows="10"
          value={messages}
          onChange={(e) => {
            setMessages(e.target.value);
          }}
          placeholder="Leave a message that will help us understand your business a little bit more"
          className="flex flex-row items-center p-[14px] gap-[5px] w-[250px] h-[119px] bg-white border border-solid border-[#B4B4B4] rounded-lg text-[14px] leading-[20px] lg:w-[520px]  text-[#B4B4B4] font-normal"
        ></textarea>
      </div>

      <div className="fifth-row flex flex-col lg:flex-row-reverse gap-[10px]  ">
        <ApplyPrimary buttonBool={buttonBool} completed={completed} />
        <Close />
      </div>
    </form>
  );
}

export default FormInputApply;
