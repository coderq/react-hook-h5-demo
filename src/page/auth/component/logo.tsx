import './index.sass';
import React from 'react';
import { useTranslation } from 'react-i18next';
import imgLogo from 'asset/image/Start the_logo@2x.png';

const Logo = () => {
  const { t } = useTranslation()
  return <div className="logo">
    <img className="img" src={imgLogo} alt="logo" />
    <div className="text">{t('logo.text')}</div>
  </div>
}

export default Logo;