import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { t, goTo } from '../../hocs';

const Creator = ({projects}) => {
  const [step, setStep] = useState('step1');
  const [data, setData] = useState({});

  switch(step) {
    case 'step1':
      return <Step1 setStep={setStep} data={data} setData={setData} />;
    case 'step2':
      return <Step2 setStep={setStep} data={data} setData={setData} />;
    default:
      return null;
  }
};

export default Creator;
