import React, { useState } from 'react';
import { WithHover, t, goTo } from '../../hocs';
import { onKeyPress } from '../../helpers'

const Step1 = ({ setStep, data, setData }) => {
  const [websiteTitle, setWebsiteTitle] = useState(data.websiteTitle || '');
  const [websiteDescription, setWebsiteDescription] = useState(data.websiteDescription || '');
  const isNextActive = websiteTitle.length > 2 && websiteDescription.length > 2 ? 'active' : '';

  const uploadFavicon = () => (
    console.log('this will upload favicon')
  )

  const handleNext = () => {
    if (isNextActive) {
      setData({ ...data, websiteTitle, websiteDescription });
      setStep('step2');
    }
  }

  return (
    <div className="creator">
      <div className="creator__header">{ t('main-information') }</div>
      <div className="creator__input-line">
        <WithHover message="website-title-hover">
          <div className="text-input">
            <input
              onChange={e => setWebsiteTitle(e.target.value)}
              placeholder={t('website-title')}
              id="website-title"
              name="website-title"
              type="text"
              className="text-input-field"
              value={websiteTitle}
            />
            <label htmlFor="website-title" className="text-input-label">
              {`${t('website-title')} (${websiteTitle.length})`}
            </label>
          </div>
        </WithHover>
      </div>
      <div className="creator__input-line">
        <WithHover message="website-description-hover">
          <div className="text-area">
            <textarea
              onChange={e => setWebsiteDescription(e.target.value)}
              id="website-description"
              name="website-description"
              placeholder={t('website-description')}
              value={websiteDescription}
            >
            </textarea>
            <label htmlFor="website-description" className="text-area-label">
              {`${t('website-description')} (${websiteDescription.length})`}
            </label>
          </div>
        </WithHover>
      </div>
      <div className="creator__input-line">
        <div className='creator__favicon'>
          <WithHover message="upload-favicon-hover">
            <div
              className="creator__favicon-ico"
              onKeyPress={onKeyPress}
              onClick={uploadFavicon}
              tabIndex="0"
            >+</div>
          </WithHover>
          <span className="creator__favicon-text">
            {t('upload-favicon')}
          </span>
        </div>
      </div>
      <div className="creator__btns">
        <WithHover message="creator-cancel-hover">
          <div
            onClick={goTo('main')}
            onKeyPress={onKeyPress}
            className="creator__btns-cancel"
            tabIndex="0"
          >
            {t('cancel')}
          </div>
        </WithHover>
        <WithHover message="creator-next-hover">
          <div
            className={`creator__btns-next ${isNextActive}`}
            onClick={handleNext}
            onKeyPress={onKeyPress}
            tabIndex={isNextActive ? "0" : "-1"}
          >
            {t('next')}
          </div>
        </WithHover>
      </div>
    </div>
  )
};

export default Step1;
