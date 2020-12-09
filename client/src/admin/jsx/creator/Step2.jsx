import React from 'react';
import { WithHover, t } from '../../hocs';

const Step2 = ({ setStep, data, setData }) => {
  console.log(data)
  const isNextActive = () => {}
  const handleNext = () => {}

  return (
    <div className="creator">
      <div className="creator__header">{ t('website-sections') }</div>
        
      <div className="creator__btns">
        <WithHover message="creator-cancel-hover">
          <div onClick={() => setStep('step1')} className="creator__btns-cancel">
            {t('back')}
          </div>
        </WithHover>
        <WithHover message="creator-next-hover">
          <div
            className={`creator__btns-next ${isNextActive}`}
            onClick={handleNext}
          >
            {t('next')}
          </div>
        </WithHover>
      </div>
    </div>
  )
}

export default Step2;
