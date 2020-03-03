import './index.sass';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonProps } from 'component/Form/type';

const Button = (props:ButtonProps) => {
  const { t } = useTranslation()
  return <div className="button" onClick={props.onClick}>
    {props.icon ? <span className={`button-icon ${props.icon}`}></span> : ''}
    <span>{t(props.label)}</span>
  </div>
}

export default Button;