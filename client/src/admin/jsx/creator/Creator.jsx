import React, { useState } from 'react';
import Step1 from './Step1';
import { t, goTo } from '../../hocs';

const Creator = ({projects}) => {
  const [step, setStep] = useState('step1');

  switch(step) {
    case 'step1':
      return <Step1 setStep={setStep} />;
    case 'step2':
      return null;
    default:
      return null;
  }
};

export default Creator;
